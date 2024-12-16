import React from "react";
import { Box } from "@mui/material";
import CommunitySection from "../components/Home/CommunitySection";
import LawyersSection from "../components/Home/LawyersSection";
import ServicesSection from "../components/Home/ServicesSection";
import Sections from "../components/Home/sections";
import JoinLawyer from "../components/Home/joinlawyer";
import Footer from "../components/Layout/Footer";

const HomePage: React.FC = () => {
  return (
    <Box>
      {/* Community Section */}
      <CommunitySection />
      <Sections />
      <ServicesSection />
      <LawyersSection />
      <JoinLawyer />
      <Footer />
    </Box>
  );
};

export default HomePage;
