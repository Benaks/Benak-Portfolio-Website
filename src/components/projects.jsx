import ProjectOne from '../assets/project-one.png'
import ProjectTwo from '../assets/project-two.png'
import ProjectFour from '../assets/project-four.jpg'
import ProjectFive from '../assets/project-five.png'
import ProjectSix from '../assets/project-six.png'
import ProjectSeven from '../assets/project-seven.png'
import ProjectEight from '../assets/project-eight.png'
import {motion} from 'framer-motion'


function projects() {
  return (
      <div className="font-poppins h-full w-full pt-8 md:pt-14 pb-20
      bg-gradient-to-b from-gray-800 to bg-black">
          <div className="flex justify-center items-center text-center flex-col py-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-500
                     to-red-300 bg-clip-text text-transparent ">Portfolio</h1>
          <h2 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-600
                     to-gray-400 bg-clip-text text-transparent'
              >dive in to some of my projects....</h2>
              
            <p className="text-gray-400 pt-6 italic">I delight in giving my clients the best, Nontheless the best is still not yet to come</p>
          </div>
          
          < div className='pt-24 grid p-5 md:p-20'>
              <div className='columns-2 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns- [&>img:not(:first-child)]:mt-5 cursor-pointer'>
              
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectTwo} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize">school website</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectFour} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize">event app</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectFive} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize"> data app</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectSeven} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize"> portfolio website</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectTwo} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700  to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize "> to-do app</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectEight} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize"> online calculator</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectOne} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize">image generator</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectSix} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize">restaurant website</div>
             </div>
             <div className="relative overflow-hidden bg-cover bg-no-repeat mb-5">
                 <motion.img initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} src={ProjectTwo} alt="" />
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-gray-700 to-red-300 opacity-0 transition duration-300 ease-in-out hover:opacity-70 flex justify-center items-center text-white font-bold capitalize">NGO website</div>
             </div>
       
                  
                  
              </div>
         </div>
          
      </div>
  )
}

export default projects