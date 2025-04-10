import { Container, Grid, Typography, Box ,Divider} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2F3349", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 - Company Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img 
                src="images/Logo_Bob-Meijer_DIA_RGB.png" 
                alt="Logo" 
                style={{ height: 40 }} // Adjusted height for better alignment
              />
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Noordijkerveldweg 10  
              <br />
              7161LW Neede  
              <br />
              Netherlands  
              <br />
              <br />
              <strong>KvK-number:</strong> 78449227  
              <br />
              <strong>Btw-identification number:</strong> NL861402728B01
            </Typography>
          </Grid>

          {/* Column 2 - Services */}
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
    Google Ads Services
  </Typography>
  {["Outsource Google Ads", "Google Ads Audit", "Google Ads Coaching"].map((item, index) => (
    <Typography 
      key={index} 
      variant="body2" 
      sx={{ transition: "color 0.3s", "&:hover": { color: "#8c9947", cursor: "pointer" } }}
    >
      {item}
    </Typography>
  ))}
          </Grid>

          {/* Column 3 - Resources */}
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
    Resources
  </Typography>
  {["Visit my LinkedIn", "Google Ads Community", "Google Ads Newsletter", "Google Ads Podcast"].map((item, index) => (
    <Typography 
      key={index} 
      variant="body2" 
      sx={{ transition: "color 0.3s", "&:hover": { color: "#8c9947", cursor: "pointer" } }}
    >
      {item}
    </Typography>
  ))}
          </Grid>

          {/* Column 4 - General */}
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
    General
  </Typography>
  {["About Me", "Contact", "Terms and Conditions", "Privacy Statement", "Cookie Policy"].map((item, index) => (
    <Typography 
      key={index} 
      variant="body2" 
      sx={{ transition: "color 0.3s", "&:hover": { color: "#8c9947", cursor: "pointer" } }}
    >
      {item}
    </Typography>
  ))}
          </Grid>
        </Grid>
        <Divider sx={{ my: 6, borderColor: "white", borderWidth: 1 }} />
        {/* Partner Logos Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 6 }}>
          <img 
            src="images/Microsoft-partner.png" 
            alt="Google Partner" 
            style={{ height: 65}}
          />
          <img 
            src="images/Google-partner.png" 
            alt="Microsoft Partner" 
            style={{ height: 65 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
