import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HeroCarouselItem from './HeroCarouselItem';  // Import HeroCarouselItem

const HeroSection = () => (
  <div className="relative w-full h-[80vh] bg-[#B3D7E0] text-white flex items-center justify-center">
    {/* Carousel */}
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {/* First Carousel Item */}
      <HeroCarouselItem 
        imageSrc="Hero-Image1.jpg" 
        altText="Promotion 1"
        title="Shop the Best Healthcare Products"
        buttonText="Shop Now"
      />
      
      {/* Second Carousel Item */}
      <HeroCarouselItem 
        imageSrc="Hero-Image2.jpg" 
        altText="Promotion 2"
        title="Get Discounts on Featured Products"
        buttonText="Explore Products"
      />
    </Carousel>
  </div>
);

export default HeroSection;
