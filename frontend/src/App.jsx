import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import ProductListPage from "./pages/ProductListPage";
import Product from "./pages/Product";
import ShoppingCart from "./components/ShoppingCart";
import PageTransition from "./components/PageTransition"; 
import Wishlist from "./components/WishList";

function App() {
  const [mode, setMode] = useState("dark");
  const [cartOpen, setCartOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);

  // Retrieve saved theme from localStorage (if exists)
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Update body background color when mode changes
  useEffect(() => {
    document.body.style.backgroundColor = mode === "light" ? "#FFFFFF" : "#1A4D6D";
    localStorage.setItem('theme', mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: { main: "#1A4D6D" },
      secondary: { main: "#2A7A9D" },
      background: {
        default: mode === "light" ? "#B3D7E0" : "#1A4D6D",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "light" ? "#ffffff" : "#1A4D6D",
            boxShadow: "none",
            borderBottom: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="px-6 md:px-16 lg:px-24">
        <Navbar mode={mode} setMode={setMode} setCartOpen={setCartOpen} setWishListOpen={setWishListOpen} />
        <ShoppingCart mode={mode} open={cartOpen} onClose={() => setCartOpen(false)} />
        <Wishlist mode={mode} open={wishListOpen} onClose={() => setWishListOpen(false)} />

        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage mode={mode} />} />
            <Route path="/home" element={<HomePage mode={mode} />} />
            <Route path="/shop" element={<ProductListPage mode={mode} />} />
            <Route path="/product" element={<Product mode={mode} />} />
          </Routes>
        </PageTransition>

        <Footer mode={mode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
