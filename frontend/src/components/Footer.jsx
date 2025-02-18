import {
  IconButton,
  Grid2,
  Typography,
  Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NewsletterSection from "./NewLetter";

// eslint-disable-next-line react/prop-types
const Footer = ({ mode }) => {
  const linkColor = mode === "dark" ? "#B3D7E0" : "#1A4D6D";

  return (
    <div
      className={`py-12 ${
        mode === "dark" ? "bg-[#1A4D6D] text-white" : "bg-[#FFFFFF] text-black"
      } border-t py-4`}
    >
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Main Footer Section */}
      <Grid2
        container
        spacing={4}
        justifyContent="between"
        className="max-w-screen-lg justify-between mx-auto px-6 mb-12"
      >
        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <ul>
            <li>
              <Link href="#" color={linkColor}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Products
          </Typography>
          <ul>
            <li>
              <Link href="#" color={linkColor}>
                Healthcare Kit
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Smart Thermometer
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Blood Pressure Monitor
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Pulse Oximeter
              </Link>
            </li>
          </ul>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <ul>
            <li>
              <Link href="#" color={linkColor}>
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" color={linkColor}>
                Contact Us
              </Link>
            </li>
          </ul>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <div className="flex space-x-4">
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <XIcon />
            </IconButton>
          </div>
        </Grid2>
      </Grid2>

      {/* Footer Bottom Section */}
      <div className="text-center py-4 border-t mt-8">
        <Typography variant="body2" color="textSecondary">
          &copy; 2025 Your M-TREAT. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
