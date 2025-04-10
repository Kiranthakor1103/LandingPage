import React from "react";
import { Typography, Box,Grid ,Container } from "@mui/material";

const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo6.png",
  "/images/logo7.png",
  "/images/logo8.png",
  "/images/logo9.png",
  "/images/logo10.png",
  "/images/logo11.png",
  "/images/logo12.png",
];

const Companies = () => {
  return (
    <Box>
    <Box sx={{ textAlign: "center", py: 4 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight={700} color="text.primary" textAlign="center">
  I work with the best companies
</Typography>

<Box display="flex" justifyContent="center" my={1}>
  <img 
    src="images/Icoon_Wave.png" 
    alt="Wave Icon" 
    style={{ width: "150px", height: "auto" }} // Adjust size here
  />
</Box>

<Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
  May I add you to the list?
</Typography>


      {/* Logos Section */}
      <Container sx={{ mt: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box
              component="img"
              src={logo}
              alt={`Company logo ${index + 1}`}
              sx={{
                width: "100%",
                maxWidth: 120,
                height: "auto",
                objectFit: "contain",
                display: "block",
                mx: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
    <Box sx={{ backgroundColor: "#E8ECE6", py: 5 }}>
  <Container>
    <Grid container spacing={4} alignItems="center">
      {/* Left Side - Image */}
      <Grid item xs={12} md={5}>
        <Box sx={{ position: "relative", display: "inline-block", width: "100%" }}>
          {/* Main Profile Image */}
          <Box
            component="img"
            src="/images/bobmeijernl-foto-6-1-1024x1024.png"
            alt="Profile"
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
          {/* Bubble Image (Top Left) - Responsive */}
          <Box
            component="img"
            src="/images/Icoon_Dots.png" // Replace with actual bubble image path
            alt="Bubble"
            sx={{
              width: { xs: "50px", sm: "70px", md: "100px" }, // Responsive width
              position: "absolute",
              top: { xs: "-10px", sm: "-15px", md: "-20px" }, // Adjust for different screens
              left: { xs: "-30px", sm: "-50px", md: "-70px" }, // Adjust for different screens
              zIndex: 2, // Ensures it stays on top
              maxWidth: "100%", // Prevents overflow issues
            }}
          />
        </Box>
      </Grid>

      {/* Right Side - Text */}
      <Grid item xs={12} md={7}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Hi, I'm Bob Meijer.
        </Typography>
        <Typography variant="body1" paragraph>
          As a Google Ads specialist, I help <b>ambitious companies</b> get the most out of Google Ads. I work for a select number of clients and am responsible for over €1,500,000 per month in ad spend.
        </Typography>
        <Typography variant="body1" paragraph>
          Over the years, I have had the opportunity to work on more than 100 Google Ads accounts. Often challenging accounts from great names, including <b>Weight Watchers, Louwman, Harley Davidson, KPMG, Schoonenberg</b>, and more.
        </Typography>
        <Typography variant="body1" paragraph>
          I also provide <b>Google Ads courses</b> and 1-on-1 <b>coaching sessions</b>. In these, I share my knowledge with <b>novice to very advanced</b> Google Ads advertisers. This way, they learn the intricacies of the business.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>

    </Box>
  );
};

export default Companies;
