import { useState } from "react";
import { Button, Typography, Rating } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProductPage = ({ mode }) => {
  const product = {
    title: "Advanced Blood Pressure Monitor",
    description:
      "A clinically validated blood pressure monitor with real-time health tracking. Keep track of your health with this advanced monitor.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, iste impedit! Porro accusantium vel explicabo qui praesentium commodi, eveniet molestiae nihil cum, dignissimos, amet aperiam.",
    price: 120.99,
    images: [
      "/BP-Monitor.jpg",
      "/glucometer.jpg",
      "/Inhaler.jpg",
      "/Pulse.jpg",
      "/Smart-Therm.jpg",
    ],
    reviews: [
      { name: "John Doe", rating: 5, comment: "Great product! Very accurate." },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Works well, but setup took some time.",
      },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div
      className={`px-6 md:px-16 lg:px-24 py-8 ${
        mode === "dark" ? "bg-[#1A4D6D] text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side: Image Gallery */}
        <div className="flex flex-col md:flex-row-reverse gap-4">
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Small Thumbnails (Left on larger screens, Below on mobile) */}
          <div className="flex md:flex-col flex-wrap gap-2 mt-2 md:mt-0">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Description & Button */}
        <div className="flex flex-col space-y-6">
          <Typography variant="h4">{product.title}</Typography>
          <Typography
            variant="h6"
            className={`mb-4 ${
              mode === "light" ? "text-[#1A4D6D]" : "text-white"
            }`}
          >
            KES {product.price.toFixed(2)}
          </Typography>

          <Typography className="pb-4">{product.description}</Typography>

          <Button
            variant="contained"
            className={`w-fit py-3 px-6 text-lg font-bold transition`}
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
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-12">
        <Typography variant="h5" className="mb-4">
          Customer Reviews
        </Typography>
        {product.reviews.map((review, index) => (
          <div
            key={index}
            className={`border-b pb-4 mb-4 ${
              mode === "dark" ? "border-gray-400" : "border-gray-700"
            }`}
          >
            <Typography variant="h6">{review.name}</Typography>
            <Rating value={review.rating} readOnly />
            <Typography>{review.comment}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
