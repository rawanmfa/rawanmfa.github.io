import FuzzyText from '../FuzzyText/FuzzyText'
import ShaderBackground from '../ShaderBackground/ShaderBackground'
import { Link } from 'react-router-dom'

export default function Notfound() {


  return <>
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center">
      <ShaderBackground waveColor={0xf9e8ee} backgroundColor={0xf486ab} />
      <FuzzyText>
        404
      </FuzzyText>
      <FuzzyText
        fontSize='2rem'
        className=' mt-5'
      > Oops! The page you are looking for doesn't exist.</FuzzyText>
      <Link to='/' className=' mt-10 button inline-block px-3 py-5 bg-black text-white rubik front-button relative rounded-tl-[80%] rounded-bl-[50%] rounded-br-[80%] rounded-tr-[50%]'>back to Home</Link>
  </div >
  </>
}