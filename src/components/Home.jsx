import { ReactTyped } from "react-typed";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { motion } from "framer-motion"
import HeroImg from '../assets/Hero-img.png'
function Home() {
    return (
        <>
            <div  className='font-poppins h-[100vh] w-full pt-44 md:pt-60 pb-20 
             bg-gradient-to-b from-black to bg-gray-700'>
                <div className='max-w-screen-lg mx-auto flex flex-col items-center 
                justify-center h-full  px-4 md:flex-row md:w-full md:justify-between'>
                    
                    <motion.div className=' pb-10 flex flex-col justify-center h-full text-center md:text-left'
                        initial={{
                            y: -250,
                            opacity:0,
                    }}
                    animate={{
                        x: 0,
                        y: -53,
                        scale: 1,
                         rotate: 0,
                        fontSize: 50,
                         opacity:1,
                        }}
                    transition={{duration:1,}}
                    >
                        <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-700
                     to-red-300 bg-clip-text text-transparent'
                     >Hi, am Dev Benak</h2>
                        <p className='text-gray-500 py-4 max-w-md'>Welcome to my portfolio site. <br /> I have 4 years experience as a Frontend Web Developer,Crafting interactive experiences from Figma designs, I bring a unique blend of creativity and technical expertise. I have worked multiple projects you may like to check out. <br /> Proficient in 
                            <span></span> <span className="font-bold bg-gradient-to-r from-slate-100 to-red-300 bg-clip-text text-transparent">
                        <ReactTyped strings={['HTML5', 'CSS3', 'Tailwind css', 'Javascript', 'React.js', 'Figma', 'Framer motion'] } typeSpeed={140}backSpeed={120} loop />
                                
                        </span>
                        </p>
                        <motion.div
                            initial={{x:'-100vw',}}
                            animate={{ x: 0, }}
                            transition={{duration:1, type:"spring", stiffness:100,}}
                            className='flex justify-center md:justify-start'>
                            <motion.button
                                transition={{duration:0.5}}
                                whileHover={{ scale: 1.02, x: 1, boxShadow: "0px 0px 4px rgb(255,255,255) " }}
                                className='text-white capitalize rounded-2xl flex flex-row px-4 py-2 font-bold bg-gradient-to-r from-slate-700 to-red-300'>
                            portfolio
                            <span>
                                <h1>..</h1>
                            </span>
                       </motion.button>
                    </motion.div>
                    
                    </motion.div>

                    <motion.div
                        initial={{ y: 200, opacity: 0, }}
                        transition={{duration:1,}}
                    animate={{
                        x: 0,
                        y: -53,
                        scale: 1,
                        opacity:1,
                      }}>
                        <div className=' p-1 bg-gradient-to-r from-slate-700 to-red-300 rounded-b-[100%]'>
                         <img src={HeroImg} alt="my image" className=' rounded-b-[100%] mx-auto w-[20em]' />
                        </div>
                        {/* <div className="flex text-2xl justify-center items-center text-gray-400 py-4">
                            <div  className="px-4 cursor-pointer"><SlSocialTwitter /></div>
                            <div className="px-4 cursor-pointer"><SlSocialLinkedin/></div>
                            <div className="px-4 cursor-pointer"><SlSocialInstagram /></div>
                            <div className="px-4 cursor-pointer"><SlSocialGithub/></div>
                        </div> */}
                      </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home

{/* <div className=' w-full h-screen'>
           <img className='top-0 left-0 w-full h-screen object-cover  ' src={HeroImg} alt="IMG" />
                <div className='bg-black/90 backdrop-blur-md backdrop-filter absolute top-[5em] w-full h-screen' />
                
                <div className="flex  p-6 md:px-24 md:flex-row  flex-col justify-center items-center mx-20 bg-gray-600/30 backdrop-blur-md  rounded-lg absolute top-36 md:top-40 ">
<div className='md:pr-40 '>
<img src={HeroImg} alt="hero image" className=' h-[100] rounded-[100%]'/>
    
</div>

<div className='text-gray-500 flex flex-col  px-10 justify-between'>
    <h1 className='text-white text-3xl font-bold py-8 md:py-4 md:text-left'>React Developer</h1>
    <p className='pb-8 font-bold' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem distinctio veniam fugit! Dolore nesciunt provident magni suscipit velit nostrum quidem?pcbLorem ipsum dolor sit, amet consectetur adipisicing elit. Rem distinctio veniam fugit! Dolore nesciunt provident magni suscipit velit nostrum quidem?</p>
    <button>click</button>
</div>
</div> 
        </div> */}

