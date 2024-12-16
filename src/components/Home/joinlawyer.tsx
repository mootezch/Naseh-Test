import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle"; // Importing the + icon

const JoinLawyer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        marginLeft: "-12em",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 140,
          left: 0,
          width: "100%",
          height: "60%",
          backgroundImage: `url('src/img/fond-back.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 68, 0.85)",
            zIndex: 1,
          },
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "100%",
          zIndex: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Analytics Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "80%", md: "45%" },
          }}
        >
          <img
            src="src/img/analytics.jpg"
            alt="Analytics"
            style={{
              maxWidth: "90%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          />
        </Box>

        {/*  Text, Cards, and Button */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 4, md: 0 },
            px: { xs: 2, md: 4 },
            maxWidth: { xs: "100%", md: "50%" }, // Adjusted width to balance with the left side
          }}
        >
          {/* Small Title */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#FFA726",
              mb: 1,
            }}
          >
            Join as a Lawyer
          </Typography>

          {/* Main Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Join as a Lawyer
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              mb: 3,
              maxWidth: 500,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Become part of our platform to connect with clients and provide your
            expertise in a seamless and professional environment.
          </Typography>

          {/* Grid of 4 Cards  */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              mb: 2,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            {[
              "Verified Platform",
              "Grow Your Clients",
              "Flexible Working",
              "Secure Payments",
            ].map((feature, index) => (
              <Grid item xs={6} sm={6} key={index}>
                <Card
                  sx={{
                    backgroundColor: "rgba(88, 88, 88, 0.5)",
                    borderRadius: 2,
                    boxShadow: 2,
                    textAlign: "center",
                    py: 0,
                    px: 2,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      gap: 1,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#4CAF50",
                        fontSize: 28,
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      color="white"
                      sx={{ fontSize: "0.9rem" }}
                    >
                      {feature}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Button with + Icon */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF9800",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "30px",
              px: 4,
              py: 1,
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                backgroundColor: "#F57C00",
              },
            }}
          >
            <AddCircleIcon sx={{ marginRight: 1 }} />
            Join Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinLawyer;
