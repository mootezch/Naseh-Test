import React from "react";
import { Container, Box, Typography, Grid, IconButton } from "@mui/material";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
const Sections: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={1}>
        {/* Buttons Container */}
        <Box
          sx={{
            position: "absolute",
            top: 700,
            left: 16,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* WhatsApp Button */}
          <IconButton
            sx={{
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "50%",
              width: 56,
              height: 56,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "#128C7E",
              },
            }}
            aria-label="WhatsApp"
            onClick={() => window.open("https://wa.me/your-number", "_blank")}
          >
            <WhatsAppIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          {/* Call Us Button */}
          <IconButton
            sx={{
              backgroundColor: "#3430ff",
              color: "white",
              borderRadius: "50%",
              width: 56,
              height: 56,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "#5c2cfd",
              },
            }}
            aria-label="Call Us"
            onClick={() => window.open("tel:+1234567890", "_self")}
          >
            <RecordVoiceOverIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>

        <Grid container spacing={5}>
          {/* Service Box */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 1, textAlign: "center" }}>
              {/* Icon  */}
              <Box
                sx={{
                  display: "inline-block",
                  borderRadius: "50%",
                  p: 1,
                  mb: 1,
                  backgroundColor: "#e2e2e2",
                }}
              >
                <VerifiedSharpIcon sx={{ color: "green", fontSize: "2rem" }} />
              </Box>

              <Typography variant="h6" gutterBottom>
                Reliable Legal Services
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Explore our wide range of legal services. Coming Soon...
              </Typography>
            </Box>
          </Grid>

          {/* Lawyers Box */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 1, textAlign: "center" }}>
              {/* Icon  */}
              <Box
                sx={{
                  display: "inline-block",
                  borderRadius: "50%",
                  p: 1,
                  mb: 1,
                  backgroundColor: "#e2e2e2",
                }}
              >
                <VerifiedSharpIcon sx={{ color: "green", fontSize: "2rem" }} />
              </Box>

              <Typography variant="h6" gutterBottom>
                Diversity of Services
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Connect with specialized lawyers. Coming Soon...
              </Typography>
            </Box>
          </Grid>

          {/* Community Blog Box */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 1, textAlign: "center" }}>
              {/* Icon  */}
              <Box
                sx={{
                  display: "inline-block",
                  borderRadius: "50%",
                  p: 1,
                  mb: 1,
                  backgroundColor: "#e2e2e2",
                }}
              >
                <VerifiedSharpIcon sx={{ color: "green", fontSize: "2rem" }} />
              </Box>

              <Typography variant="h6" gutterBottom>
                Security & Confidentiality
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Read the latest legal insights. Coming Soon...
              </Typography>
            </Box>
          </Grid>

          {/* Electronic Payment Box */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ p: 1, textAlign: "center" }}>
              {/* Icon */}
              <Box
                sx={{
                  display: "inline-block",
                  borderRadius: "50%",
                  p: 1,
                  mb: 1,
                  backgroundColor: "#e2e2e2",
                }}
              >
                <VerifiedSharpIcon sx={{ color: "green", fontSize: "2rem" }} />
              </Box>

              <Typography variant="h6" gutterBottom>
                Easy Electronic Payment
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Seamless payment solutions for your convenience. Coming Soon...
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Sections;
