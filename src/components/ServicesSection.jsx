import React from "react";
import { Box, Container, Grid, Typography, Button, Card, CardContent } from "@mui/material";

export const ServicesSection = () => {
  const services = [
    {
      title: "Outsource Google Ads",
      description:
        "I get the most out of your Google Ads campaigns. Let me setup, manage and optimize your account.",
      buttonText: "I want to know more",
      bgColor: "#FCEED8",
        icon: "/images/Icoon_Google-Ad.png"
    },
    {
      title: "Google Ads courses",
      description:
        "Learn proven Google Ads strategies, techniques, and clever hacks I use daily to grow my client’s accounts!",
      buttonText: "I want to learn Google Ads",
      bgColor: "#E8ECE5",
      icon: "/images/Icoon_Google-Ad1.png"
    },
    {
      title: "Google Ads coaching",
      description:
        "Do you have the basics of Google Ads under control and are ready to go deeper? I am here for you!",
      buttonText: "I want to spar",
      bgColor: "#D9ECEB",
      icon: "/images/Icoon_Google-Ad2.png"
    },
  ];

  return (
    <Box>
      {/* Google Ads Services Section */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
          Google Ads services
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: service.bgColor,
                    textAlign: "center",
                    height: "100%",
                    p: { xs: 2, sm: 3 },
                    borderRadius: "12px",
                    boxShadow: 2,
                  }}
                >
                  <CardContent>
  {/* Image */}
  <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
    <img
      src={service.icon}
      alt={service.title}
      style={{ width: "100px", height: "100px" }} // Adjust size as needed
    />
  </Box>

  {/* Title */}
  <Typography variant="h5" sx={{ mb: 3  }}>
    {service.title}
  </Typography>

  {/* Description */}
  <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
    {service.description}
  </Typography>

  {/* Button */}
  <Button
  variant="outlined"
  sx={{
     fontWeight: "bold", // Ensure bold text
    textTransform: "none", // Prevent automatic capitalization
    mb: 3,
    color: "#2F3349", // Set text color
    borderColor: "#2F3349", // Set border color
    "&:hover": {
      backgroundColor: "black", // Change background on hover
      color: "white",
    },
  }}
>
  {service.buttonText}
</Button>

</CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Work With Me Section */}
      <Box
        sx={{
          py: { xs: 6, sm: 8, md: 10 },
          backgroundColor: "#E2F1F0",
          textAlign: "center", 
          position: "relative",
          // overflow: "hidden",
          px: { xs: 2, sm: 4, md: 6 }, // Padding for responsiveness
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Text Section */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Work with me.
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
                  I get the most out of it.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                  Let's talk about the results I can get for your business. Free of jargon and without
                  bullshit bingo.
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "black", color: "white", textTransform: "none",}}>
                  Get in touch
                </Button>
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {/* Half Circle Background */}
                <Box
  sx={{
    width: { xs: "300px", sm: "400px", md: "500px" }, // Full circle width
    height: { xs: "150px", sm: "200px", md: "250px" }, // Same as width for full circle
    borderRadius: "250px 250px 0 0", // Full circle
    backgroundColor: "#C4E1DF", // Background color
    position: "absolute",
    bottom: { xs: "-48px", sm: "-62px", md: "-80px" },  // Lower it behind the image
    left: "50%",
    transform: "translateX(-50%)",
  }}
/>
                {/* Image */}
                <Box
                  component="img"
                  src="/images/bobmeijer.nl-homepage-v5-1.png"
                  alt="Person Walking on Beach"
                  sx={{
                    width: { xs: "200px", sm: "250px", md: "300px" },
                    height: { xs: "300px", sm: "380px", md: "450px" },
                    borderRadius: "8px",
                    boxShadow: 3,
                    top: { xs: "80px", sm: "100px", md: "120px" },
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
