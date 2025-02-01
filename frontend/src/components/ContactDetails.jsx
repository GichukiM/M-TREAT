
import { Typography, Box, Paper, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ContactDetails = ({ mode }) => (
    <Box flex={1}>
      <Paper elevation={3} className={`${mode === "light" ? "bg-white" : "bg-[#1A4D6D]"} p-6`}>
        <Typography variant="h6" className="font-bold mb-4">Contact Details</Typography>
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
          <Box display="flex" gap={4} justifyContent="flex-start">
            <Link href="https://facebook.com" target="_blank" color="inherit">
              <IconButton color="inherit" className="hover:text-[#1877F2]">
                <Facebook />
              </IconButton>
            </Link>
            <Link href="https://twitter.com" target="_blank" color="inherit">
              <IconButton color="inherit" className="hover:text-[#1DA1F2]">
                <Twitter />
              </IconButton>
            </Link>
            <Link href="https://linkedin.com" target="_blank" color="inherit">
              <IconButton color="inherit" className="hover:text-[#0077B5]">
                <LinkedIn />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );

  export default ContactDetails;