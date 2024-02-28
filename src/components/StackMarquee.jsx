import Marquee from 'react-fast-marquee'
import Html from '../assets/html.png'
import Css from '../assets/css3.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Figma from '../assets/figma.png'
import Git from '../assets/github.png'
import GitSocial from '../assets/gitSocial.png'
function StackMarquee() {
  return (
      <div>
      
      <div className='bg-gradient-to-r from-black via-gray-900 to-black py-4'>
        <Marquee
          play='true'
          gradient='true'
          gradientColor='black'
         
        
        
        >
          <div className='mr-32'>
               <img className='h-20' src={Html} alt="HTML LOGO" />
          </div>
          <div className='mr-32'>
               <img className='h-20' src={Css} alt="CSS LOGO" />
          </div>
          <div className='mr-32'>
               <img className='h-20' src={Javascript} alt="javascript logo" />
          </div>
          <div className='mr-32'>
               <img className='h-20' src={ReactImg} alt="REACT LOGO" />
          </div>
          <div className='mr-20'>
               <img className='h-20' src={Figma} alt="Figma logo" />
          </div>
          <div className='mr-20'>
               <img className='h-20' src={Git} alt="GITHUB logo" />
          </div>
          <div className='mr-20'>
               <img className='h-20' src={GitSocial} alt="GIT SOCIAL logo" />
          </div>
         
        </Marquee>
      </div>
    </div>
  )
}

export default StackMarquee