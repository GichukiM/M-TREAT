import { useState } from "react";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProductSection = ({ mode }) => {
  const bestsellers = [
    {
      name: "Healthcare Kit",
      description: "All-in-one health essentials.",
      image: "HealthcareKit.jpg",
    },
    {
      name: "Blood Pressure Monitor",
      description: "Keep track of your health.",
      image: "BP-Monitor.jpg",
    },
    {
      name: "Pulse Oximeter",
      description: "Monitor your oxygen levels.",
      image: "Pulse.jpg",
    },
    {
      name: "Smart Thermometer",
      description: "Instant temperature readings.",
      image: "Smart-Therm.jpg",
    },
  ];

  const featuredProducts = [
    {
      name: "Smart Thermometer",
      description: "Instant temperature readings.",
      image: "Smart-Therm.jpg",
    },
    {
      name: "Pulse Oximeter",
      description: "Monitor your oxygen levels.",
      image: "Pulse.jpg",
    },
    {
      name: "First Aid Kit",
      description: "Complete emergency health kit.",
      image: "HealthcareKit.jpg",
    },
    {
      name: "Digital Glucometer",
      description: "Track blood sugar levels easily.",
      image: "glucometer.jpg",
    },
  ];

  const discounts = [
    {
      name: "Inhaler",
      description: "Discount on bulk purchases!",
      image: "Inhaler.jpg",
    },
    {
      name: "First Aid Kits",
      description: "Get 20% off today!",
      image: "HealthcareKit.jpg",
    },
    {
      name: "Pulse Oximeter",
      description: "Affordable monitoring solutions.",
      image: "Pulse.jpg",
    },
    {
      name: "Blood Pressure Monitor",
      description: "Keep track of your health.",
      image: "BP-Monitor.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("discounts");

  const renderProductSection = (title, products) => (
    <div className="py-10">
      <h2
        className={`text-3xl font-bold ${
          mode === "light" ? "text-[#1A4D6D]" : "text-white"
        } mb-6`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover mb-4"
            />
            <h3
              className={`text-xl font-semibold ${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            >
              {product.name}
            </h3>
            <p
              className={`text-[#1A4D6D] mb-4 ${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            >
              {product.description}
            </p>
            <Button
              variant="outlined"
              color={mode === "light" ? "primary" : "secondary"}
              sx={{
                borderColor: mode === "light" ? "#1A4D6D" : "#2A7A9D",
                color: mode === "light" ? "#1A4D6D" : "white",
                backgroundColor: mode === "light" ? "transparent" : "#2A7A9D",
                "&:hover": {
                  borderColor: mode === "light" ? "#2A7A9D" : "#FFFFFF",
                  backgroundColor: mode === "light" ? "#B3D7E0" : "#1A4D6D",
                  color: mode === "light" ? "#1A4D6D" : "white",
                },
              }}
            >
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-center">
      <h1
        className={`mt-8 mb-4 uppercase text-2xl font-semibold ${
          mode === "light" ? "text-[#1A4D6D]" : "text-white"
        }`}
      >
        See some amazing Deals
      </h1>
      {/* Category Buttons */}
      <div className=" flex flex-wrap justify-center gap-4">
        <Button
          variant="contained"
          onClick={() => setSelectedCategory("featured")}
          sx={{
            backgroundColor:
              selectedCategory === "featured" ? "#1A4D6D" : "#2A7A9D",
            color: selectedCategory === "featured" ? "white" : "#1A4D6D",
            borderRadius: "8px",
            padding: "8px 16px",
          }}
          className="w-full sm:w-auto"
        >
          FEATURED
        </Button>
        <Button
          variant="contained"
          onClick={() => setSelectedCategory("bestsellers")}
          sx={{
            backgroundColor:
              selectedCategory === "bestsellers" ? "#1A4D6D" : "#2A7A9D",
            color: selectedCategory === "bestsellers" ? "white" : "#1A4D6D",
            marginRight: "10px",
            borderRadius: "8px",
            padding: "8px 16px",
          }}
          className="w-full sm:w-auto"
        >
          BESTSELLERS
        </Button>
        <Button
          variant="contained"
          onClick={() => setSelectedCategory("discounts")}
          sx={{
            backgroundColor:
              selectedCategory === "discounts" ? "#1A4D6D" : "#2A7A9D",
            color: selectedCategory === "discounts" ? "white" : "#1A4D6D",
            borderRadius: "8px",
            padding: "8px 16px",
          }}
          className="w-full sm:w-auto"
        >
          DISCOUNTS
        </Button>
      </div>

      {/* Display the selected category products */}
      {selectedCategory === "featured" &&
        renderProductSection("Featured Products", featuredProducts)}
      {selectedCategory === "bestsellers" &&
        renderProductSection("Bestsellers", bestsellers)}
      {selectedCategory === "discounts" &&
        renderProductSection("Discounted Products", discounts)}
    </div>
  );
};

export default ProductSection;
