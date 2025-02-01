
import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ mode, onSubmit, isSubmitted }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    return (
      <Box flex={1}>
        <Paper elevation={3} className={`${mode === "light" ? "bg-white" : "bg-[#1A4D6D]"} p-6`}>
          {isSubmitted ? (
            <Typography variant="h6" className="text-center text-green-500">
              Thank you for reaching out! We&apos;ll get back to you soon.
            </Typography>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h6" className="font-bold mb-4">Get in Touch</Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  {...register("name", { required: "Full Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  type="email"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" }
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  {...register("subject", { required: "Subject is required" })}
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={`${mode === "light" ? "bg-[#1A4D6D] text-white hover:bg-[#2A7A9D]" : "bg-white text-[#1A4D6D] hover:bg-[#B3D7E0]"}`}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          )}
        </Paper>
      </Box>
    );
  };

  export default ContactForm;
  