import { useState } from "react";
import { Typography, Box, } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

// eslint-disable-next-line react/prop-types
const ContactPage = ({ mode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    // Simulating a form submission
    console.log("Form Data Submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <Box
      className={`${
        mode === "light" ? "bg-white text-[#1A4D6D]" : "bg-[#1A4D6D] text-white"
      } min-h-screen p-6`}
    >
      <Typography variant="h4" className="font-bold text-center mb-8 pb-8">
        Contact Us
      </Typography>

      {/* Left and Right Sections using Flexbox */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={4}
        marginBottom={4}
      >
        {/* Left Section: Contact Details */}
        <ContactDetails mode={mode} />
        
        {/* Right Section: Contact Form */}
        <ContactForm mode={mode} onSubmit={handleFormSubmit} isSubmitted={isSubmitted} />
      </Box>

      {/* Embedded Google Map */}
      <Typography
        variant="h4"
        className="font-bold mt-8 mb-8 pb-8 pt-8 text-center"
      >
        Visit Us
      </Typography>
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Nairobi,Kenya"
      ></iframe>
    </Box>
  );
};

export default ContactPage;
