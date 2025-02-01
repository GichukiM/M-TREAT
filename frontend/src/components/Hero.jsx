import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => (
  <div className="relative w-full h-[80vh] bg-[#B3D7E0] text-white flex items-center justify-center">
    {/* Carousel for promotions */}
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {/* First Carousel Item */}
      <div className="h-full flex items-center justify-center relative">
        <img 
          src="Hero-Image1.jpg" 
          alt="Promotion 1" 
          className="w-full h-[80vh] object-cover object-center" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" /> {/* Dark overlay */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-full px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-shadow-lg">Shop the Best Healthcare Products</h1>
          <button 
            className="bg-[#1A4D6D] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Second Carousel Item */}
      <div className="h-full flex items-center justify-center relative">
        <img 
          src="Hero-Image2.jpg" 
          alt="Promotion 2" 
          className="w-full h-[80vh] object-cover object-center" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" /> {/* Dark overlay */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-full px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-shadow-lg">Get Discounts on Featured Products</h1>
          <button 
            className="bg-[#1A4D6D] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Explore Products
          </button>
        </div>
      </div>
    </Carousel>
  </div>
);

export default HeroSection;
