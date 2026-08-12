import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from 'gsap';

function BackgroundMesh({ waveColor, backgroundColor }) {
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      // u_baseColor: { value: new THREE.Color(0xefc8d5) }, // fbc1d4
      u_waveColor: { value: new THREE.Color(waveColor) }, // f9dbe5  0xf9e8ee
      u_backgroundColor: { value: new THREE.Color(backgroundColor) } // 0xf486ab
    }), []
  );

  useEffect(() => {
    if (!materialRef.current) return;

    const wave = new THREE.Color(waveColor);
    const background = new THREE.Color(backgroundColor);

    gsap.to(materialRef.current.uniforms.u_waveColor.value, {
      r: wave.r,
      g: wave.g,
      b: wave.b,
      duration: 1.5,
      ease: "power2.out"
    });

    gsap.to(materialRef.current.uniforms.u_backgroundColor.value, {
      r: background.r,
      g: background.g,
      b: background.b,
      duration: 1.5,
      ease: "power2.out"
    });

  }, [waveColor, backgroundColor]);

  useEffect(() => {
    const onResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_resolution.value.set(
          window.innerWidth,
          window.innerHeight
        );
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value += delta * 1.5;
    }
  });

  const fragmentShader = `
    uniform float u_time;
    uniform vec2 u_resolution;
    // uniform vec3 u_baseColor;
    uniform vec3 u_waveColor;
    uniform vec3 u_backgroundColor;

    // Smooth noise function
    float noise(vec2 p) {
      return sin(p.x) * sin(p.y);
    }

    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution.xy;
      vec2 uv = st * 2.5;

      // Pulsing wave effect - waves appear and disappear
      float waveInterval = 5.0; // Time between waves (adjust this: higher = slower)
      float waveDuration = 8.0; // How long each wave lasts (adjust this)
      
      // Create pulsing envelope using sine wave
      float pulsePhase = mod(u_time, waveInterval) / waveDuration;
      float waveStrength = sin(pulsePhase * 3.14159) * smoothstep(1.0, 0.0, pulsePhase);
      
      // Faster organic flow pattern
      float t = u_time * 0.9;
      float n = 0.0;
      
      n += 0.8 * noise(uv + vec2(t * 0.4, t * 0.2));
      n += 0.7 * noise(uv * 2.0 - vec2(t * 0.5, 0.0));
      n += 0.2 * noise(uv * 4.0 + vec2(0.0, t * 0.5));

      // Apply wave strength (makes wave appear/disappear)
      n *= waveStrength;
      
      // background glow around the wave edges
      float waveEdge = abs(n);
      float backgroundGlow = smoothstep(0.3, 0.7, waveEdge);

      // Combine flow
      float wave = n * 0.5 + 0.5;

      // Start with wave color
      vec3 color = u_waveColor; // mix(u_baseColor, u_waveColor, wave * waveStrength)
      
      // Add background glow to wave edges
      color = mix(color, u_backgroundColor, backgroundGlow * 0.4);

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const vertexShader = `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function ShaderBackground({ waveColor, backgroundColor }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <BackgroundMesh waveColor={waveColor} backgroundColor={backgroundColor} />
      </Canvas>
    </div>
  );
}