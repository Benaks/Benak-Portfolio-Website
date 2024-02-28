import { motion } from "framer-motion";
function stats() {
  return (
    <>
      <div className="h-72 mx-auto  bg-black p-4 flex justify-between items-center md:px-[20em]">
      <div className='mt-20 h-[8em] w-[8em] md:h-[10em] md:w-[10em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'>
        <div className="mb-20h-[7em] w-[8em] md:h-[9em] md:w-[9em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
          <h1 className="text-2xl font-bold text-red-300">4+</h1>
          <p className="text-gray-300 text-[0.8em] p-4">satisfied clients in 4 years since 2020</p>
        </div>     
        </div>

        <div className='mb-20 h-[8em] w-[8em] md:h-[10em] md:w-[10em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30'>
        <div className="mb-20h-[7em] w-[8em] md:h-[9em] md:w-[9em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
          <h1 className="text-2xl font-bold text-red-300">33+</h1>
          <p className="text-gray-300 text-[0.8em] p-4">satisfied clients in 4 years since 2020</p>
        </div>     
        </div>

        <div className="mt-20 h-[8em] w-[8em] md:h-[10em] md:w-[10em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
          <div className="mb-20h-[7em] w-[8em] md:h-[9em] md:w-[9em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
            <h1 className="text-2xl font-bold text-red-300">87+</h1>
            <p className="text-gray-300 text-[0.8em] p-4">
              satisfied clients in 4 years since 2020
            </p>
          </div>
        </div>

        <div className="mb-20 h-[8em] w-[8em] md:h-[10em] md:w-[10em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
          <div className="mb-20h-[7em] w-[8em] md:h-[9em] md:w-[9em] flex justify-center text-center flex-col bg-gray-500 rounded-[100%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30">
            <h1 className="text-2xl font-bold text-red-300">35+</h1>
            <p className="text-gray-300 text-[0.8em] p-4">
              satisfied clients in 4 years since 2020
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default stats;
