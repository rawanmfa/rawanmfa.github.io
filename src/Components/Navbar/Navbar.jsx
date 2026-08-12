import batman from '../../assets/batman-logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    
  return <>
    
    <div className=' flex justify-between items-center md:fixed  w-full px-10 xl:px-32 pt-8 md:pt-14 z-50'>
      <Link to='/'><img src={batman} alt="batman-logo" className=' w-[70px]'/></Link>
      <ul className=' flex items-center space-x-1 rubik'>
        <li><NavLink to='projects'>Projects</NavLink></li>
        <li className='londrina text-3xl'>/</li>
        <li><NavLink to='about'>About</NavLink></li>
      </ul>
    </div>
  
  </>
}