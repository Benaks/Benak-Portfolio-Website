function contact() {
  return (
    <div className="w-full py-10 h-screen bg-gradient-to-b from-gray-800 to-black flex justify-center items-center flex-col font-poppins">
      <div>
        <h1 className="pb-4 text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-700
                     to-red-300 bg-clip-text text-transparent ">Contact</h1>
      </div>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="flex flex-col md:flex-row w-full ">
          <div className="md:text-left md:w-1/2 md:pr-20 text-center pb-8">
            <h2
              className=" pb-4 text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-600
                     to-gray-800 bg-clip-text text-transparent  "
            >
              Send me a message today. Lets get in touch..
            </h2>
            <p className="text-gray-400 md:text-1xl italic">
              Be assured of my quick response
            </p>
          </div>

          <div className="flex justify-center items-center w-full md:w-1/2">
            <form
              action="https://formspree.io/f/mpzvdqjd"
              method="POST"
              className="flex flex-col w-full md:1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className=" p-2 bg-transparent border-gray-500 border-2 rounded-md text-gray-500
                          focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className=" my-4 p-2 bg-transparent border-gray-500 border-2 rounded-md text-gray-500
                          focus:outline-none"
              />
              
              <textarea
                name="Message"
                rows="6"
                className="p-2 border-2 rounded-md
                           text-gray-500 focus:outline-none bg-transparent border-gray-500"
                placeholder="Enter your message"
              ></textarea>

              <button
                type="submit"
                className=" px-6 py-3 my-4 mx-auto flex items-center
                          rounded-md hover:scale-110 duration-300 text-white capitalize flex-row font-bold bg-gradient-to-r from-slate-700 to-red-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
