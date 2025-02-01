import { useState } from "react";
import { Button, TextField, Typography, Box, Paper, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ContactPage = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Box flex={1} >
          <Paper
            elevation={3}
            className={`${
              mode === "light" ? "bg-white" : "bg-[#1A4D6D]" // Background color on Paper component
            } p-6`}
          >
            <Typography variant="h6" className="font-bold mb-4">
              Contact Details
            </Typography>

            <Box display="flex" flexDirection="column" gap={3}>
              <Typography variant="body1">
                <strong>Address:</strong> Nairobi, Kenya, XYZ Street, 00100
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> info@m-treat.com
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> +254 759965954
              </Typography>
              <Typography variant="body1" className="mb-4">
                <strong>Follow us:</strong>
              </Typography>

              {/* Social media icons with proper spacing */}
              <Box display="flex" gap={4} justifyContent="flex-start">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  color="inherit"
                >
                  <IconButton
                    color="inherit"
                    className="hover:text-[#1877F2]" // Facebook blue color
                  >
                    <Facebook />
                  </IconButton>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  color="inherit"
                >
                  <IconButton
                    color="inherit"
                    className="hover:text-[#1DA1F2]" // Twitter blue color
                  >
                    <Twitter />
                  </IconButton>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  color="inherit"
                >
                  <IconButton
                    color="inherit"
                    className="hover:text-[#0077B5]" // LinkedIn blue color
                  >
                    <LinkedIn />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Right Section: Contact Form */}
        <Box flex={1}>
          <Paper
            elevation={3}
            className={`${
              mode === "light" ? "bg-white" : "bg-[#1A4D6D]" 
            } p-6`}
          >
            {isSubmitted ? (
              <Typography variant="h6" className="text-center text-green-500">
                Thank you for reaching out! We&apos;ll get back to you soon.
              </Typography>
            ) : (
              <form onSubmit={handleSubmit}>
                <Typography variant="h6" className="font-bold mb-4">
                  Get in Touch
                </Typography>
                <Box display="flex" flexDirection="column" gap={2}>
                  {/* Name and Email Fields */}
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  {/* Subject and Message Fields */}
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className={`${
                      mode === "light"
                        ? "bg-[#1A4D6D] text-white hover:bg-[#2A7A9D]"
                        : "bg-white text-[#1A4D6D] hover:bg-[#B3D7E0]"
                    }`}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            )}
          </Paper>
        </Box>
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
