import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        // overflow: "hidden",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FEF4E8",
        py: { xs: 6, sm: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", textAlign: "left" }}>
              {/* Arrow Icon */}
              <Box
                component="img"
                src="images/Icoon_Arrow-Up.png"
                alt="Arrow Icon"
                sx={{
                  width: { xs: "40px", sm: "60px", md: "96px" },
                  height: "auto",
                  position: "absolute",
                  top: { xs: "-20px", sm: "-30px", md: "-40px" },
                  left: { xs: "10px", sm: "-40px", md: "-120px" },
                }}
              />

              {/* Text Content */}
              <Box sx={{ mt: { xs: 3, md: 5 } }}>
              <Typography
  variant="h6"
  sx={{
    fontFamily: "sans-serif",
    fontWeight: 550,
    fontSize: { xs: "1.8rem", sm: "2.5rem", md: "2.6rem" },
    lineHeight: 1.1,
    mb: 3,
    textAlign: { xs: "center", md: "left" },
  }}
>
  Your Google Ads campaigns perform better with me behind the wheel.
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "sans-serif",
    fontSize: { xs: "1rem", md: "1.1rem" },
    color: "text.secondary",
    mb: 3,  
    textAlign: { xs: "center", md: "left" },
  }}
>
  I'll get the most out of your Google Ads campaigns or teach you the intricacies so you can do it yourself!
</Typography>


                {/* CTA Button */}
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "text.primary",
                      color: "white",
                      textTransform: "none",
                      px: { xs: 3, md: 4 },
                      py: 1.5,
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      "&:hover": { bgcolor: "grey.800" },
                      width: { xs: "100%", md: "auto" },
                    }}
                  >
                    I want to outsource Google Ads
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Image */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Full Circle Background */}
              <Box
  sx={{
    width: { xs: "300px", sm: "400px", md: "500px" },
    height: { xs: "150px", sm: "200px", md: "250px" }, // Half of the width to create a semi-circle
    borderRadius: "250px 250px 0 0", // Top half round, bottom flat
    backgroundColor: "#d5c197",
    position: "absolute",
    bottom: { xs: "-48px", sm: "-60px", md: "-95px" }, // Adjust to align properly
    left: "50%",
    transform: "translateX(-50%)",
  }}
/>

              {/* Image */}
              <Box
  component="img"
  src="/images/first.png"
  alt="Person Walking on Beach"
  sx={{
    width: { xs: "200px", sm: "280px", md: "320px" },
    height: { xs: "300px", sm: "420px", md: "480px" },
    borderRadius: "4px",
    boxShadow: 3,
    position: "relative",
    zIndex: 2,
    top: { xs: "80px", sm: "100px", md: "140px" },
  }}
/>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
