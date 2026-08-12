import gsap from 'gsap';
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';

export default function Loader() {

  let [counter, setCounter] = useState(0);
  const loaderRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo('.counter',
      {
        y: -600,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 2,
        ease: 'bounce.out',
      }
    );

    tl.to('.counter', {
      duration: 3,
      onUpdate: function () {
        let progress = this.progress() * 100;
        setCounter(Math.floor(progress));
      }
    });

    tl.to(".counter", {
      scale: 50,
      xPercent: -300,
      yPercent: -100,
      position: "absolute",
      duration: 1.2,
      ease: "power4.in",
    });

    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });


  }, []);

  return <>

    <div ref={loaderRef} className=' bg-black min-h-screen flex justify-start items-end relative'>
      <h3 className=' text-[12rem] rubik ps-8 counter text-[#f794bb]'>{counter}</h3>
    </div>

  </>
}