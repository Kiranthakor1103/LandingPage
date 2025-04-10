import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import { ServicesSection } from "./components/ServicesSection";
import About from "./components/About";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Box>
      <Navbar />
      {/* Added padding-bottom to HeroSection */}
      <Box pb={4}>
        <HeroSection />
      </Box>
      {/* Added padding-top to Companies to ensure spacing */}
      <Box pt={4}>
        <Companies />
      </Box>
      <Box pt={2}>
        <ServicesSection/>
      </Box>
      <About/>
      <Footer/>
      
    </Box>
  );
};

export default App;
