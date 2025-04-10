import { Container, Grid, Card, Typography, Avatar,Box ,Button} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

const testimonials = [
  {
    name: "Jens Riga",
    role: "Head of Digital at WeightWatchers",
    image: "/images/card1.png",
    text: "Bob convinced WeightWatchers of his knowledge and expertise from the 1st moment of contact. The results exceeded expectations!",
  },
  {
    name: "Tim Nota",
    role: "Director at WisMon",
    image: "/images/card2.png",
    text: "Bob has provided results quickly with a structured approach. He also offered a more professional basis for further optimizing our campaigns.",
  },
  {
    name: "Fanar Al-Obaidy",
    role: "Founder at NOX Sleep Drink",
    image: "/images/card3.png",
    text: "We have been working with Bob for quite some time, and his expertise in Google Ads has become indispensable.",
  },
  {
    name: "Trisha Thakor",
    role: "Head of Digital at Facebook",
    image: "/images/Card4.jpg",
    text: "Bob convinced WeightWatchers of his knowledge and expertise from the 1st moment of contact. The results exceeded expectations!",
  },
  {
    name: "Kiran Thakor",
    role: "Director at IT Soft",
    image: "/images/kiran.jpg",
    text: "Bob has provided results quickly with a structured approach. He also offered a more professional basis for further optimizing our campaigns.",
  },
  {
    name: "Sejal Dr",
    role: "Founder at NOX Medicine",
    image: "/images/Card5.jpg",
    text: "We have been working with Bob for quite some time, and his expertise in Google Ads has become indispensable.",
  },
];

const About = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4 }}>
        What people say about me
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
           <Card
  sx={{
    p: 5,
    textAlign: "center",
    boxShadow: 3,
    borderRadius: 3,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: 6,
    },
  }}
>
  {/* Centered Quote Icon */}
  <Box display="flex" justifyContent="center" mb={4}>
    <Box
      component="img"
      src="/images/Icoon_Quotepng.png" // Corrected path
      alt="Quote Icon"
      sx={{
        width: 40, // Adjust size
        height: "auto",
      }}
    />
  </Box>

  {/* Testimonial Text */}
  <Typography variant="body1" sx={{ mb: 3 }}>
    {testimonial.text}
  </Typography>

  {/* User Avatar */}
  <Avatar
  src={testimonial.image}
  alt={testimonial.name}
  sx={{
    width: 60,
    height: 60,
    mx: "auto",
    mb: 2,
    border: "4px solid #fff", // Add a border
    borderRadius: "50%", // Ensure it's circular
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" // Optional shadow
  }}
/>


  {/* User Name */}
  <Typography variant="subtitle1" sx={{ fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
  {testimonial.name} 
  <LinkedInIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 }}} />
</Typography>


  {/* User Role */}
  <Typography variant="body2" sx={{ color: "text.secondary" }}>
    {testimonial.role}
  </Typography>
</Card>

          </Grid>
        ))}
      </Grid>
     
    </Container>
      
    <Box
        sx={{
          py: { xs: 6, sm: 8, md: 10 },
          backgroundColor: "#FEF4E8",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, sm: 4, md: 6 }, // Padding for responsiveness
        }}
      >
        <Typography variant="h4" align="center" sx={{ color: "text.primary", mb: 2 }}>
  <strong>Ready to grow?</strong>
</Typography>
    
<Typography align="center" sx={{ maxWidth: "750px", mx: "auto", color: "text.primary", mt: 2 }}>
  Let's talk about the results I can get for your business. Free of jargon and without bullshit bingo.
</Typography>
<br />
<Button 
  variant="contained" 
  sx={{ 
    backgroundColor:  "#2F3349", 
    color: "white", 
    textTransform: "none", // Prevents uppercase transformation
    "&:hover": { backgroundColor: "#333" } 
  }}
>
  Get in touch
</Button>
    </Box>
    </>
  );
};

export default About;
