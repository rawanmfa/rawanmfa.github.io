import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ShaderBackground from '../ShaderBackground/ShaderBackground';

export default function Home() {

  useGSAP(() => {
    gsap.fromTo('.gsap', {
      y: -80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 1.8,
        ease: 'power1.inOut'
      }
    })

    gsap.fromTo('.button', {
      y: 80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 1.8,
      stagger: {
        amount: 0.2,
        ease: 'power1.inOut'
      }
    })
  }, [])


  return <>
    <div className="relative md:min-h-screen overflow-hidden">
      <ShaderBackground waveColor={0xf9e8ee} backgroundColor={0xf486ab} />
      <div className=' flex justify-center items-center flex-col md:h-svh text-center home pt-40 md:p-0 pb-10'>
        <div className='londrina sm:text-5xl text-4xl me-3 mb-2 flex space-x-2'>
          <h1 className=' gsap opacity-100'>Hi, </h1>
          <h1 className=' gsap opacity-100'> I </h1>
          <h1 className=' gsap opacity-100'>am</h1>
          <h1 className=' gsap opacity-100 rubik rawan relative'>Rawan Mahmoud</h1>
        </div>
        <div className=' londrina md:text-4xl lg:text-5xl text-[1.6rem] flex space-x-2'>
          <h1 className=' gsap opacity-100'>, I</h1>
          <h1 className=' gsap opacity-100'>am </h1>
          <h1 className=' gsap opacity-100'>a</h1>
          <h1 className=' gsap opacity-100'>Full</h1>
          <h1 className=' gsap opacity-100'>stack</h1>
          <h1 className=' gsap opacity-100'>developer</h1>
          <h1 className=' gsap opacity-100'>and</h1>
          <h1 className=' gsap opacity-100'>AI</h1>
          <h1 className=' gsap opacity-100'>enthusiastic</h1>
        </div>
        <div className=' mt-16 flex items-center justify-between pb-2.5 w-3/4 md:w-1/2 lg:w-4/12 xl:w-1/4 '>
          <Link to='/projects' className=' button opacity-0 inline-block px-3 py-5 bg-black text-white rubik front-button relative rounded-tl-[80%] rounded-bl-[50%] rounded-br-[80%] rounded-tr-[50%]'> view my work</Link>
          <Link to='/about' className=' button opacity-0 inline-block px-[0.35rem] py-5 bg-black text-white rubik front-button relative rounded-tl-[80%] rounded-bl-[50%] rounded-br-[80%] rounded-tr-[50%]'> more about me</Link>
        </div>
      </div>
    </div>
  </>
}