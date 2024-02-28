import HeroImg from "../assets/Hero-img.png";
import Nelson from '../assets/nelson.jpg'

import Tom from '../assets/tom.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "Paul Anumah",
    testimony: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, facilis repudiandae. Iste voluptatum unde sit quis deleniti alias, eveniet delectus! ",
  },
  {
    name: "Ochai Benedict",
    testimony: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, facilis repudiandae. Iste voluptatum unde sit quis deleniti alias, eveniet delectus! ",
  },
  {
    name: "Nelson Akaager",
    testimony: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, facilis repudiandae. Iste voluptatum unde sit quis deleniti alias, eveniet delectus! ",
  },
  {
    name: "Tom Brown",
    testimony: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, facilis repudiandae. Iste voluptatum unde sit quis deleniti alias, eveniet delectus! ",
  },
];

function Testimonial() {
  const settings = {
    
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "70px",
    slidesToShow: 1,
    speed: 600,
    dots:true,
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 py-20 flex-col flex justify-center items-center font-poppins">
          <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-700
                     to-red-300 bg-clip-text text-transparent ">Testimonials</h1>
              <p className="text-gray-400 py-4 italic">What my clients say...</p>
      </div>
          
    <div className="w-[90%] m-auto">
        <div className="m-10">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4  mx-10 h-[300px] w-[500px] rounded-xl">
                <div className="flex flex-col-reverse justify-center items-start gap-4">
                  <div className="pr-10 flex  items-center">
                    
                    <img className="rounded-[100%] w-14 mr-4 border-2" src={HeroImg} alt="clients" />
                    <p className="text-gray-300 font-bold text-[1.2em]">{item.name}</p>
                    </div>
                  <div>
                     <p className="text-gray-500 text-3xl pt-8 p-0">"</p>
                    <p className="text-[0.9em]  text-gray-600">{item.testimony}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
