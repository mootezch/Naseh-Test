import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import SectionTitle from "../Common/SectionTitle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookIcon from "@mui/icons-material/Book";
import CallIcon from "@mui/icons-material/Call";

const serviceData = [
  {
    title: "Scheduled consultations",
    status: "Book a consultation",
    icon: "🕒",
    description:
      "Schedule a consultation at a convenient time with our experts.",
  },
  {
    title: "Written consultation",
    status: "Soon",
    icon: "📝",
    description: "Get expert advice in writing for your legal matters.",
  },
  {
    title: "Urgent consultation",
    status: "Consult now",
    icon: "🚨",
    description: "Immediate consultations for urgent legal issues.",
  },
  {
    title: "Contracts & agreements",
    status: "Soon",
    icon: "📄",
    description: "Draft contracts and agreements with professional assistance.",
  },
  {
    title: "Corporate Portal",
    status: "Soon",
    icon: "🏢",
    description: "Access our corporate portal for business-related services.",
  },
  {
    title: "Hire A Lawyer",
    status: "Soon",
    icon: "👨‍⚖️",
    description: "Find and hire the best legal professionals for your case.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 20 }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* "Services" Label */}
        <Typography color="#388E3C" sx={{ fontWeight: 600 }}>
          Services
        </Typography>

        {/* "View All Services"  */}
        <Link
          href="/services"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#388E3C", 
            fontWeight: 600,
            textDecoration: "none",
            "&:hover": {
              color: "#2c6e2f",
            },
          }}
        >
          View All Services <ArrowForwardIcon sx={{ ml: 1 }} />
        </Link>
      </Box>

      <SectionTitle title="A Wide Range of Legal Services" subtitle="" />

      <Grid container spacing={3}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Icon and Title  */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "2rem",
                      mr: 1, 
                    }}
                  >
                    {service.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                    {/* Description under the title */}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mb: 1 }}
                    >
                      {service.description}
                    </Typography>
                  </Typography>
                </Box>
              </CardContent>

              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button
                  variant={service.status === "Soon" ? "outlined" : "contained"}
                  color={service.status === "Soon" ? "secondary" : "primary"}
                  sx={{
                    borderRadius: 4,
                    textTransform: "none",
                  }}
                  disabled={service.status === "Soon"}
                >
                  {/*  icons based on status */}
                  {service.status === "Book a consultation" && (
                    <BookIcon sx={{ mr: 1 }} />
                  )}
                  {service.status === "Consult now" && (
                    <CallIcon sx={{ mr: 1 }} />
                  )}
                  {service.status}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
