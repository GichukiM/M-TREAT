import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';

// eslint-disable-next-line react/prop-types
const Navbar = ({ mode, setMode, setCartOpen, setWishListOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <AppBar
      position="sticky"
      className={`transition-all duration-300 ${
        mode === "light" ? "bg-white" : "bg-[#1A4D6D]"
      }`}
      sx={{ backgroundColor: mode === "light" ? "bg-white" : "#1A4D6D" }}
    >
      <Toolbar className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold tracking-wide hover:text-[#2A7A9D] transition-all duration-300 ${
            mode === "light" ? "text-[#1A4D6D]" : "text-white"
          }`}
        >
          M-TREAT
        </Link>

        {/* Desktop Navigation */}
        <Box className="hidden sm:flex space-x-6">
          {["Home", "Shop", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className={`text-lg font-medium relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#2A7A9D] after:transition-all after:duration-300 hover:after:w-full ${
                mode === "light"
                  ? "text-[#1A4D6D]"
                  : "text-white hover:text-[#2A7A9D]"
              }`}
            >
              {item}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            <DarkModeIcon
              className={`${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            />
          </Button>

          {/* Cart Icon (Desktop) */}
          <IconButton onClick={() => setCartOpen(true)}>
            <ShoppingCartIcon
              className={`${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            />
          </IconButton>

          {/* Wish Icon (Desktop) */}
          <IconButton onClick={() => setWishListOpen(true)}>
            <FavoriteIcon
              className={`${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            />
          </IconButton>
        </Box>

        {/* Mobile Menu Icon + Dark Mode + Cart Icon */}
        <Box className="sm:hidden flex items-center space-x-4">
          {/* Dark Mode Button on Mobile */}
          <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            <DarkModeIcon
              className={`${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            />
          </Button>

          {/* Cart Icon (Mobile) */}
          <IconButton onClick={() => setCartOpen(true)}>
            <ShoppingCartIcon
              className={`${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            />
          </IconButton>

          {/* Wish Icon (Mobile) */}
          <IconButton onClick={() => setWishListOpen(true)}>
            <FavoriteIcon
              className={`${
                mode === "light" ? "text-[#1A4D6D]" : "text-white"
              }`}
            />
          </IconButton>

          {/* Mobile Menu Icon */}
          <IconButton
            className="text-[#1A4D6D] sm:!hidden hover:text-[#2A7A9D] transition-all duration-300"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        <Box className="w-64 h-full bg-white text-[#1A4D6D] p-6">
          <List>
            {["Home", "Shop", "Contact Us"].map((item, index) => (
              <ListItem key={index} button onClick={handleDrawerToggle}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-[#1A4D6D] text-lg font-medium block py-2 transition-all duration-300 hover:text-[#2A7A9D]"
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
