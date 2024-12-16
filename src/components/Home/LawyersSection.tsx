import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LanguageIcon from "@mui/icons-material/Language";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const lawyerData = [
  {
    name: "Lawfrim",
    description: "Specialized lawyers around the clock",
    language: "Arabic & English",
    experience: "10-15",
    imageUrl: "src/img/qatar-flag.png",
  },
  {
    name: "Saleh For Law",
    description: "I Provide Specialized Legal Consultations",
    language: "Arabic & English",
    experience: "10-15",
    imageUrl: "src/img/qatar-flag.png",
  },
  {
    name: "Al Ansari Law Firm",
    description: "Comprehensive legal solutions",
    language: "Arabic & English",
    experience: "10-15",
    imageUrl: "src/img/qatar-flag.png",
  },
  {
    name: "Dunne Law Pl",
    description: "I Provide Specialized Legal Consultations",
    language: "Arabic & English",
    experience: "10-15",
    imageUrl: "src/img/qatar-flag.png",
  },
  {
    name: "Dunne Law Pllc",
    description: "Expert legal consultancy",
    language: "Arabic & English",
    experience: "10-15",
    imageUrl: "src/img/qatar-flag.png",
  },
];

const LawyersSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, position: "relative" }}>
      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#5fdc65",
          mb: 1,
        }}
      >
        Lawfrim
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          mb: 4,
        }}
      >
        Specialized lawyers around the clock
      </Typography>

      {/* Scroll Buttons */}
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 2,
          zIndex: 2,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 2,
          zIndex: 2,
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Scrolling Section */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          paddingBottom: 2,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {lawyerData.map((lawyer, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 280,
              maxWidth: 300,
              flex: "0 0 auto",
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              {/* Lawyer Image */}
              <Avatar
                alt={lawyer.name}
                src={lawyer.imageUrl}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  mx: "auto",
                }}
              />

              {/* Lawyer Name */}
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {lawyer.name}
              </Typography>

              {/* Description */}
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {lawyer.description}
              </Typography>

              {/* Divider */}
              <Divider sx={{ mb: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  fontSize: 14,
                  color: "text.secondary",
                }}
              >
                {/* Language */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LanguageIcon fontSize="small" />
                  <Typography fontWeight={700} fontSize="13px">
                    {lawyer.language}
                  </Typography>
                </Box>

                {/* Divider Line */}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ backgroundColor: "grey.400", height: "20px" }}
                />

                {/* Years of Experience */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <WorkHistoryIcon fontSize="small" />
                  <Typography fontWeight={700} fontSize="13px">
                    {lawyer.experience} Years
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            {/* View Profile Button */}
            <Box sx={{ textAlign: "center", pb: 2 }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 20,
                  px: 8,
                  backgroundColor: "#002D62",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#001D44",
                  },
                }}
              >
                View Profile
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default LawyersSection;
