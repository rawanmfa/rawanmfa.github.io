import ShaderBackground from '../ShaderBackground/ShaderBackground'
import MagicBento from '../MagicBento/MagicBento'

export default function About() {

  return <>
    <div className="relative min-h-screen overflow-hidden">
      <ShaderBackground waveColor={0xf9e8ee} backgroundColor={0xf486ab} />
      <div className=' md:flex items-end justify-center md:h-svh'>
        <MagicBento />
      </div>
    </div>
  </>
}