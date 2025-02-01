// eslint-disable-next-line react/prop-types
const HeroCarouselItem = ({ imageSrc, altText, title, buttonText }) => (
    <div className="h-full flex items-center justify-center relative">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="w-full h-[80vh] object-cover object-center" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" /> {/* Dark overlay */}
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-full px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-shadow-lg">{title}</h1>
        <button 
          className="bg-[#1A4D6D] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
  
  export default HeroCarouselItem;
  