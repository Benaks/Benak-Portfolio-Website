import Navbar from '../src/components/Navbar'
import Home from './components/Home'
import Stats from './components/stats'
import Projects from './components/projects'
import Contact from './components/contact'
import { motion } from 'framer-motion'
import HeroImg from './assets/Hero-img.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import StackMarquee from './components/StackMarquee'
import Testimonial from './components/Testimonial'
import LoginButton from './components/LoginBtn'



function App() {
  

  return (


    
    <>
      <div className=''>
        <Navbar />
        <Home />
        <Stats />
        <StackMarquee />
        <Projects />
        <Testimonial/>
        <Contact />
        <LoginButton/>
        
        
       </div>

      <motion.div  drag dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0, }} className='z-10'>
      <FloatingWhatsApp 
        phoneNumber="+2348022945902"
        accountName="Benak"
        allowEsc
        allowClickAway
        statusMessage='Available for work'
        darkMode='true'
        avatar={HeroImg}
        chatMessage='Hello there! How can I be of help?'
        notification='true'
        notificationSound='true'
      />
      </motion.div>
    </>
  )
}

export default App
