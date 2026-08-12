import ShaderBackground from '../ShaderBackground/ShaderBackground'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Stack from '../Stack/Stack';
import home from '../../assets/drugchecker/home.webp';
import druginteraction from '../../assets/drugchecker/druginteraction.webp';
import chatbot from '../../assets/drugchecker/chatbot.webp';
import druganalyzer from '../../assets/drugchecker/druganalyzer.webp';
import register from '../../assets/drugchecker/register.webp';
import CircularText from '../CircularText/CircularText';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });

  return (
    <div ref={ref} className={className}>
      {inView ? <img src={src} alt={alt} onDragStart={(e) => e.preventDefault()} className="w-full h-full" /> : null}
    </div>
  );
};


export default function DrugcheckerProject() {

  const images = [chatbot, druganalyzer, druginteraction, register, home];

  useGSAP(() => {
    gsap.fromTo('.eachprojectgsap', {
      y: -60,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 0.4,
        ease: 'power1.inOut'
      }
    })
    gsap.fromTo('.button', {
      y: 150,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.4
    })
  }, [])

  return <>
    <div className="relative min-h-screen xl:overflow-hidden">
      <ShaderBackground waveColor={0xeaf9f8} backgroundColor={0x0b549e} />
      <div className=' flex flex-col xl:flex-row justify-between items-center xl:items-stretch mx-4 my-container xl:mx-14 gap-10 xl:gap-0'>
        <div className=' mt-10 md:mt-36 pt-2 xl:w-1/4 relative md:w-[55%] w-[85%] text-center xl:text-left' >
          <h2 className='londrina text-7xl pb-7 eachprojectgsap'>DrugChecker</h2>
          <p className='text-[#4c4a4a] pb-7 eachprojectgsap'>A web application that helps users check drug interactions and analyze drug information with smart chatbot.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rawanmfa/Medical-interacions" className=' eachprojectgsap opacity-0 inline-block px-6 py-2 bg-black text-white rubik visit-button hover:bg-[#0f68c1] relative rounded-tl-[80%] rounded-bl-[50%] rounded-br-[80%] rounded-tr-[50%]'>Visit</a>
        </div>
        <div className=' relative md:w-[52%] w-[80%] lg:w-5/12 me-5 xl:mt-36 pt-2 eachprojectgsap h-64 md:h-72 xl:h-80'>
          <Stack
            cards={images.map((src, i) => (
              <LazyImage
                key={i}
                src={src}
                alt={`DrugCheckerImage-${i + 1}`}
                className=' w-full h-full'
              />
            ))}
          />
        </div>
        <div className='xl:mt-36 pt-2 xl:w-1/4 md:w-[55%] w-[85%]'>
          <h4 className=' font-sans eachprojectgsap'>Role</h4>
          <p className='text-[#4c4a4a] my-width pb-2 eachprojectgsap'>Full stack Developer</p>
          <h4 className=' font-sans eachprojectgsap'>Technologies</h4>
          <p className='text-[#4c4a4a] my-width pb-2 eachprojectgsap'>React.js, TailwindCSS, ContextApi, React Router Dom, Axios, ASP.NET, Authentication, LinQ, Entity framework</p>
          <h4 className=' font-sans eachprojectgsap'>Year</h4>
          <p className='text-[#4c4a4a] my-width pb-2 eachprojectgsap'>2025</p>
          <h4 className=' font-sans eachprojectgsap'>Notes</h4>
          <p className='text-[#4c4a4a] eachprojectgsap'>I only did small parts of the backend so i didn't attach the backend resources.</p>
        </div>
      </div>
      <div className=' flex justify-between mt-10 mx-8 my-container'>
        <Link to="/projects/freshcartproject" className=' button'>
          <CircularText text="GO*TO*PREVIOUS*PROJECT*" />
        </Link>
        <Link to="/projects/bazarproject" className=' button'>
          <CircularText text="GO*TO*NEXT*PROJECT*" />
        </Link>
      </div>
    </div>
  </>
}