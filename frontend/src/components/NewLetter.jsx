import { Button, TextField, Grid2, Typography } from "@mui/material";

const NewsletterSection = () => (
  <div className="max-w-screen-lg mx-auto px-6 mb-12 text-center sm:text-left bg-black p-12">
    <Typography variant="h4" gutterBottom className="text-white">
      Subscribe to Our Newsletter
    </Typography>
    <Typography variant="body1" className="pb-8 text-white">
      Get the latest updates, promotions, and health tips directly to your inbox.
    </Typography>
    <Grid2 container spacing={2} justifyContent="between" alignItems="center">
      <Grid2 item xs={12} sm="auto">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email"
          size="small"
          className=" text-black"
        />
      </Grid2>
      <Grid2 item xs="auto">
        <Button
          variant="contained"
          color="primary"
          className="bg-white text-[#1A4D6D] border-[#1A4D6D] hover:bg-[#2A7A9D] hover:text-white"
        >
          Subscribe
        </Button>
      </Grid2>
    </Grid2>
  </div>
);

export default NewsletterSection;
