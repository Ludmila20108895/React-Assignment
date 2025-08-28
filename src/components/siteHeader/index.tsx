import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar"; // Import AppBar for the header
import Toolbar from "@mui/material/Toolbar"; // Import Toolbar for layout within the AppBar
import Typography from "@mui/material/Typography"; // Import Typography for text styling
import IconButton from "@mui/material/IconButton"; // Import IconButton for clickable icons
import Button from "@mui/material/Button"; // Import Button for navigation links
import { styled } from "@mui/material/styles"; // Import styled for custom styling
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon for the mobile menu button
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem for individual menu options
import Menu from "@mui/material/Menu"; // Import Menu for the dropdown menu functionality
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useTheme } from "@mui/material/styles"; // Import useTheme for responsive design
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery for responsive breakpoints
import LanguageOption from "./languageOption";

const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

// This component renders the site header with navigation options
// It includes a title, a menu icon for mobile view, and buttons for navigation
const SiteHeader: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Define the menu options with labels and paths
  // Each option corresponds to a page in the application
  const menuOptions = [
    { label: "HOME", path: "/" }, // Home page
    { label: "FAVORITES", path: "/movies/favourites" }, // Favorites page
    { label: "UPCOMING", path: "/movies/upcoming" }, // Upcoming movies page
    { label: "MUST WATCH", path: "/movies/mustwatch" }, // Must Watch movies page
    { label: "ACTORS", path: "/actors" }, // Actors list page
  ];

  // Function to handle menu item selection
  // It navigates to the selected page URL
  // It uses the useNavigate hook from react-router-dom for navigation
  // It sets the anchor element to null to close the menu after selection
  const handleMenuSelect = (pageURL: string) => {
    navigate(pageURL);
  };

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h6" sx={styles.title}>
            <LanguageOption />
          </Typography>
          <Typography variant="h4" sx={styles.title}>
            Movie App
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
