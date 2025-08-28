// siteHeader

/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useLanguage } from "../../contexts/languageContext";
import translations from "../../i18n/translations";
import Box from "@mui/material/Box";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

// This component renders the site header with navigation options
// It includes a title, a menu icon for mobile view, and buttons for navigation
const SiteHeader: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

  // Defines the menu options with labels and paths
  // Each option corresponds to a page in the application
  type MenuOpt = { label: string; path: string };

  const menuOptions: MenuOpt[] = [
    { label: t.navDiscover, path: "/" },
    {
      label: t.navFavorites,
      path: "/movies/favourites",
    },
    {
      label: t.navUpcoming,
      path: "/movies/upcoming",
    },
    {
      label: t.navMustWatch,
      path: "/movies/mustwatch",
    },
    { label: t.navActors, path: "/actors" },
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
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ flexShrink: 0 }}>
            <LanguageOption />
          </Box>
          {/*   the title in the center */}
          <Typography
            variant="h4"
            sx={{
              mx: 2,
              flex: 1,
              minWidth: 0,
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {translations[lang].header}{" "}
          </Typography>

          {isMobile ? (
            <Box sx={{ flexShrink: 0 }}>
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
                    key={opt.path}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.path}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
