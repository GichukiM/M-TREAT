import HeroSection from "../components/Hero";
import ProductSection from "../components/Products";

// eslint-disable-next-line react/prop-types
const HomePage = ({mode}) => {
  return (
    <>
      <HeroSection />
      <ProductSection mode={mode}/>
    </>
  );
};

export default HomePage;
