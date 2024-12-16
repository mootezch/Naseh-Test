import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import QatarFlag from "../../img/qatar-flag.png";
import nasehLogo from "../../img/naseh-logo.jpg";

const Header: React.FC = () => {
  const navItems = [
    "Home",
    "About Us",
    "Law Firm",
    "Services",
    "Community",
    "Contact Us",
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        paddingY: 1,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
        }}
      >
        {/* Logo with Text */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={nasehLogo} alt="Naseh Logo" height="40" />
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              fontWeight: "bold",
              color: "green",
              fontSize: "1.2rem",
            }}
          >
            Naseh
          </Typography>
        </Box>

        {/* Navigation + Language Switcher  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Navigation Items */}
          {navItems.map((item) => (
            <Button
              key={item}
              color="inherit"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  color: "primary.main",
                },
                ...(item === "Contact Us" && { marginRight: "90px" }),
              }}
            >
              {item}
            </Button>
          ))}

          {/* Profile Button */}
          <Button
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "2px solid #dedede",
              borderRadius: "8px",
              backgroundColor: "transparent",
              padding: "6px 12px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                borderColor: "primary.main",
              },
            }}
          >
            <PermIdentityIcon sx={{ mr: 1 }} />
          </Button>

          {/* Language Button  */}
          <Button
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "2px solid #dedede",
              borderRadius: "8px",
              backgroundColor: "transparent",
              padding: "6px 12px",
              height: "40px",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                borderColor: "primary.main",
              },
            }}
          >
            <img
              src={QatarFlag}
              alt="Qatar Flag"
              height="20"
              style={{ marginRight: "8px" }}
            />
            AR
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
