import { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, Pagination } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProductsListingPage = ({ mode }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [page, setPage] = useState(1);

  // Example product data (you can fetch this from an API or use a static array)
  const allProducts = [
    {
      id: 1,
      name: "Healthcare Kit",
      image: "HealthcareKit.jpg",
      price: 45,
      description: "All-in-one health essentials",
      category: "Health Essentials",
    },
    {
      id: 2,
      name: "Blood Pressure Monitor",
      image: "BP-Monitor.jpg",
      price: 150,
      description: "Track your blood pressure",
      category: "Monitoring",
    },
    {
      id: 3,
      name: "Pulse Oximeter",
      image: "Pulse.jpg",
      price: 99,
      description: "Monitor your oxygen levels",
      category: "Monitoring",
    },
    {
      id: 4,
      name: "Smart Thermometer",
      image: "Smart-Therm.jpg",
      price: 30,
      description: "Instant temperature readings",
      category: "Health Essentials",
    },
    {
      id: 5,
      name: "Healthcare Kit",
      image: "HealthcareKit.jpg",
      price: 45,
      description: "All-in-one health essentials",
      category: "Health Essentials",
    },
    {
      id: 6,
      name: "Blood Pressure Monitor",
      image: "BP-Monitor.jpg",
      price: 150,
      description: "Track your blood pressure",
      category: "Monitoring",
    },
    // More products...
  ];

  // Filter products based on selected category and price range
  useEffect(() => {
    let filtered = allProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  }, [category, priceRange]);

  // Handle page change for pagination
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Paginate filtered products (assuming 4 products per page)
  const productsPerPage = 4;
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  return (
    <div
      className={`products-listing-page ${
        mode === "light" ? "text-[#1A4D6D]" : "bg-[#1A4D6D] text-white"
      } py-8`}
    >
      <h1
        className={`text-3xl text-center font-bold ${
          mode === "light" ? "text-[#1A4D6D]" : "text-white"
        } mb-6`}
      >
        Products
      </h1>

      <div className="flex flex-col md:flex-row gap-8 container mx-auto">
        {/* Filters Section */}
        <div className="filters w-full md:w-1/4 p-6 border-b-2 md:border-r-2 md:border-b-0 mb-8 md:mb-0">
          <h2 className="text-2xl mb-4">Filters</h2>

          {/* Category Filter */}
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            displayEmpty
            label="Category"
            className="w-full mb-4 border"
            sx={{ backgroundColor: mode === "dark" ? "#1A4D6D" : "#fff" }}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Health Essentials">Health Essentials</MenuItem>
            <MenuItem value="Monitoring">Monitoring</MenuItem>
            {/* Add more categories here */}
          </Select>

          {/* Price Range Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <TextField
              type="number"
              label="Min Price"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
              className="w-full"
              sx={{ backgroundColor: mode === "dark" ? "#1A4D6D" : "#fff" }}
            />

            <TextField
              type="number"
              label="Max Price"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
              className="w-full"
              sx={{ backgroundColor: mode === "dark" ? "#1A4D6D" : "#fff" }}
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="product-grid w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="product-card border p-4 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p
                  className={`text-[#1A4D6D] mb-4 ${
                    mode === "light" ? "text-[#1A4D6D]" : "text-white"
                  }`}
                >
                  {product.description}
                </p>
                <p className="font-bold mb-4">KES {product.price}</p>
                <Button
                  variant="outlined"
                  color={mode === "light" ? "primary" : "secondary"}
                  sx={{
                    borderColor: mode === "light" ? "#1A4D6D" : "#2A7A9D",
                    color: mode === "light" ? "#1A4D6D" : "white",
                    backgroundColor:
                      mode === "light" ? "transparent" : "#2A7A9D",
                    "&:hover": {
                      borderColor: mode === "light" ? "#2A7A9D" : "#FFFFFF",
                      backgroundColor: mode === "light" ? "#B3D7E0" : "#1A4D6D",
                      color: mode === "light" ? "#1A4D6D" : "white",
                    },
                  }}
                  className="mt-4"
                >
                  View Details
                </Button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination mt-8 flex justify-center">
            <Pagination
              count={Math.ceil(filteredProducts.length / productsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListingPage;
