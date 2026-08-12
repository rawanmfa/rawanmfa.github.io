import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import bazar from '../../assets/bazar.jpg'
import drugs from '../../assets/drug.jpg'
import freshcart from '../../assets/freshcart.jpg'
import ikea from '../../assets/ikea.jpg'
import mmadl from '../../assets/mmadl.jpg'
import yummy from '../../assets/yummy.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ShaderBackground from '../ShaderBackground/ShaderBackground';
import TextPressure from '../TextPressure/TextPressure';

export default function Projects() {

  const [Fresh, setFresh] = useState(false);
  const [Drugs, setDrugs] = useState(false);
  const [Bazar, setBazar] = useState(false);
  const [Ikea, setIkea] = useState(false);
  const [Mmadl, setMmadl] = useState(false);
  const [Yummy, setYummy] = useState(false);
  const [waveColor, setWaveColor] = useState(0xf9e8ee);
  const [backgroundColor, setBackgroundColor] = useState(0xf486ab);
  const [projectswaveColor, setProjectsWaveColor] = useState("#fc8dbb");

  useGSAP(() => {
    gsap.fromTo('.projectgsap', {
      y: -60,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 1.2,
        ease: 'power1.inOut'
      }
    })

    gsap.fromTo('.allprojectsgsap', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: {
        amount: 1.2,
        ease: 'power1.inOut'
      }
    })
  }, []);

  const svg = `<svg width="50" height="20" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 10 Q12.5 0 25 10 T50 10"
        stroke="${projectswaveColor}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return <>
    <div className="relative">
      <ShaderBackground waveColor={waveColor} backgroundColor={backgroundColor} />
      <div className=' flex flex-row items-end justify-end md:min-h-screen'>
        <div className=' w-[90%] md:w-[70%] pt-28 md:pt-28 lg:pt-0 m-auto lg:m-0 lg:w-[48%] xl:w-2/5 xl:me-14 md:h-[480px]'>
          <h3 className=' text-5xl rubik border-b border-black projectgsap pb-7 projects-pa text-center relative'>Projects
            <div className=' absolute w-[230px] h-5 left-1/2 -translate-x-1/2 -z-10 bottom-6 projects opacity-60 bg-size-[50px 20px] bg-repeat-x bg-position-[0%_0%]' style={{ backgroundImage: `url("${dataUrl}")` }}></div>
          </h3>
          <ul className='h-[400px] overflow-y-auto scrollbar-hide'>
            <li onMouseEnter={() => { setFresh(true); setWaveColor(0xeaf9f1); setBackgroundColor(0x03c45a); setProjectsWaveColor("#898484"); }} onMouseLeave={() => { setFresh(false); setWaveColor(0xf9e8ee); setBackgroundColor(0xf486ab); setProjectsWaveColor("#fc8dbb"); }} className=' li-hover'><Link to='freshcartproject' className=' border-b border-black text-[#626060] allprojectsgsap py-4 pe-10 flex justify-between items-center'><div className=' relative'><TextPressure text="FreshCart" /></div><i className=" text-xl fa-solid fa-chevron-right me-5"></i></Link></li>
            <li onMouseEnter={() => { setDrugs(true); setWaveColor(0xeaf9f8); setBackgroundColor(0x0b549e); setProjectsWaveColor("#f70909"); }} onMouseLeave={() => { setDrugs(false); setWaveColor(0xf9e8ee); setBackgroundColor(0xf486ab); setProjectsWaveColor("#fc8dbb"); }} className=' li-hover'><Link to='drugcheckerproject' className=' border-b border-black text-[#626060] allprojectsgsap py-4 pe-10 flex justify-between items-center'><div className=' relative'><TextPressure text="Drugs Checker" /></div><i className=" text-xl fa-solid fa-chevron-right me-5"></i></Link></li>
            <li onMouseEnter={() => { setBazar(true); setWaveColor(0xfff8e5); setBackgroundColor(0xe2460d); setProjectsWaveColor("#020c7c"); }} onMouseLeave={() => { setBazar(false); setWaveColor(0xf9e8ee); setBackgroundColor(0xf486ab); setProjectsWaveColor("#fc8dbb"); }} className=' li-hover'><Link to='bazarproject' className=' border-b border-black text-[#626060] allprojectsgsap py-4 pe-10 flex justify-between items-center'><div className=' relative'><TextPressure text="Bazar" /></div><i className=" text-xl fa-solid fa-chevron-right me-5"></i></Link></li>
            <li onMouseEnter={() => { setIkea(true); setWaveColor(0xefe6e6); setBackgroundColor(0xf40202); setProjectsWaveColor("#ffffff"); }} onMouseLeave={() => { setIkea(false); setWaveColor(0xf9e8ee); setBackgroundColor(0xf486ab); setProjectsWaveColor("#fc8dbb"); }} className=' li-hover'><Link to='ikeaproject' className=' border-b border-black text-[#626060] allprojectsgsap py-4 pe-10 flex justify-between items-center'><div className=' relative'><TextPressure text="Ikea" /></div><i className=" text-xl fa-solid fa-chevron-right me-5"></i></Link></li>
            <li onMouseEnter={() => { setMmadl(true); setWaveColor(0xf6e3fc); setBackgroundColor(0x8c23af); setProjectsWaveColor("#efef09"); }} onMouseLeave={() => { setMmadl(false); setWaveColor(0xf9e8ee); setBackgroundColor(0xf486ab); setProjectsWaveColor("#fc8dbb"); }} className=' li-hover'><Link to='mmadlproject' className=' border-b border-black text-[#626060] allprojectsgsap py-4 pe-10 flex justify-between items-center'><div className=' relative'><TextPressure text="MMADL" /></div><i className=" text-xl fa-solid fa-chevron-right me-5"></i></Link></li>
            <li onMouseEnter={() => { setYummy(true); setWaveColor(0xf9bdbd); setBackgroundColor(0xfff200); setProjectsWaveColor("#a82222"); }} onMouseLeave={() => { setYummy(false); setWaveColor(0xf9e8ee); setBackgroundColor(0xf486ab); setProjectsWaveColor("#fc8dbb"); }} className=' li-hover'><Link to='yummyproject' className=' border-b border-black text-[#626060] allprojectsgsap py-4 pe-10 flex justify-between items-center'><div className=' relative'><TextPressure text="Yummy" /></div><i className=" text-xl fa-solid fa-chevron-right me-5"></i></Link></li>
          </ul>
        </div>
        <div className=' w-[48%] xl:w-[45%] h-[480px] relative hidden lg:block'>
          <img src={freshcart} className={`absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl w-3/4 h-3/4 transition-all duration-500 ${Fresh ? "opacity-100 scale-105" : "opacity-0"}`} />
          <img src={drugs} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl w-3/4 h-3/4 transition-all duration-500 ${Drugs ? "opacity-100 scale-105" : "opacity-0"}`} />
          <img src={bazar} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl w-3/4 h-3/4 transition-all duration-500 ${Bazar ? "opacity-100 scale-105" : "opacity-0"}`} />
          <img src={ikea} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl w-3/4 h-3/4 transition-all duration-500 ${Ikea ? "opacity-100 scale-105" : "opacity-0"}`} />
          <img src={mmadl} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl w-3/4 h-3/4 transition-all duration-500 ${Mmadl ? "opacity-100 scale-105" : "opacity-0"}`} />
          <img src={yummy} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl w-3/4 h-3/4 transition-all duration-500 ${Yummy ? "opacity-100 scale-105" : "opacity-0"}`} />
        </div>
      </div>
    </div>
    <Outlet />
  </>
}