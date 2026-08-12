import ShaderBackground from '../ShaderBackground/ShaderBackground'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Stack from '../Stack/Stack';
import results from '../../assets/mmadl/results.webp';
import training from '../../assets/mmadl/training.webp';
import data1 from '../../assets/mmadl/data1.webp';
import data2 from '../../assets/mmadl/data2.webp';
import paper from '../../assets/mmadl/paper.webp';
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

export default function MMADLProject() {

  const images = [paper, data2, data1, training, results];

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
      <ShaderBackground waveColor={0xf6e3fc} backgroundColor={0x8c23af} />
      <div className=' flex flex-col xl:flex-row justify-between items-center xl:items-stretch mx-4 my-container xl:mx-14 gap-10 xl:gap-0'>
        <div className=' mt-10 md:mt-36 pt-2 xl:w-1/4 relative md:w-[55%] w-[85%] text-center xl:text-left' >
          <h2 className='londrina text-7xl pb-7 eachprojectgsap'>MMADL</h2>
          <p className='text-[#4c4a4a] pb-7 eachprojectgsap'>A model for predicting medical interactions using knowledge graphs and deep learning.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rawanmfa/Medical-interactions-MMADL-model" className=' eachprojectgsap opacity-0 inline-block px-6 py-2 bg-black text-white rubik visit-button hover:bg-[#9506c1] relative rounded-tl-[80%] rounded-bl-[50%] rounded-br-[80%] rounded-tr-[50%]'>Visit</a>
        </div>
        <div className=' relative md:w-[52%] w-[80%] lg:w-5/12 me-5 xl:mt-36 pt-2 eachprojectgsap h-64 md:h-72 xl:h-80'>
          <Stack
            cards={images.map((src, i) => (
              <LazyImage
                key={i}
                src={src}
                alt={`MMADLProjectImage-${i + 1}`}
                className=' w-full h-full'
              />
            ))}
          />
        </div>
        <div className='xl:mt-36 pt-2 xl:pt-10 xl:w-1/4 md:w-[55%] w-[85%]'>
          <h4 className=' font-sans eachprojectgsap'>Role</h4>
          <p className='text-[#4c4a4a] my-width pb-2 eachprojectgsap'>Ai/ML engineer</p>
          <h4 className=' font-sans eachprojectgsap'>Technologies</h4>
          <p className='text-[#4c4a4a] my-width pb-2 eachprojectgsap'>Python, rdkit, pykeen, torch, pandas, numpy, ...</p>
          <h4 className=' font-sans eachprojectgsap'>Year</h4>
          <p className='text-[#4c4a4a] my-width pb-2 eachprojectgsap'>2025</p>
          <h4 className=' font-sans eachprojectgsap'>Notes</h4>
          <p className='text-[#4c4a4a] eachprojectgsap'>This model was inspired from a paper by Liyu Huang , Qingfeng Chen and Wei Lan.</p>
        </div>
      </div>
      <div className=' flex justify-between mt-8 mx-8 my-container'>
        <Link to="/projects/ikeaproject" className=' button'>
          <CircularText text="GO*TO*PREVIOUS*PROJECT*" />
        </Link>
        <Link to="/projects/yummyproject" className=' button'>
          <CircularText text="GO*TO*NEXT*PROJECT*" />
        </Link>
      </div>
    </div>
  </>
}