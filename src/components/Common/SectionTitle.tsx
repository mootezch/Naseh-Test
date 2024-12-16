import React from "react";
import { Typography, Box } from "@mui/material";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: 4,
      }}
    >
      {/* Title Styling */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: subtitle ? 2 : 0,
        }}
      >
        {title}
      </Typography>

      {/* Subtitle Styling */}
      {subtitle && (
        <Typography variant="subtitle1" color="textSecondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
