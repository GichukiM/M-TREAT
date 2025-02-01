import { Drawer, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const ShoppingCart = ({ open, onClose, mode }) => {
  // Dummy Cart Data
  const cart = [
    { name: "Glucometer", price: 2500, quantity: 1, image: "/glucometer.jpg" },
    { name: "BP-Monitor", price: 3500, quantity: 2, image: "/BP-Monitor.jpg" },
    { name: "Inhaler", price: 1500, quantity: 1, image: "/Inhaler.jpg" },
  ];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        className={`w-80 md:w-96 p-6 flex flex-col h-full transition-all duration-300 ${mode === "light" ? "bg-white text-[#1A4D6D]" : "bg-[#1A4D6D] text-white"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6" className="text-lg font-bold">
            Shopping Cart
          </Typography>
          <IconButton
            onClick={onClose}
            className={mode === "light" ? "text-[#1A4D6D]" : "text-white"}
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <Typography
              className={`${
                mode === "light" ? "text-gray-600" : "text-gray-300"
              } text-center`}
            >
              Your cart is empty.
            </Typography>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 border-b py-4 ${
                  mode === "light" ? "border-gray-300" : "border-gray-500"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <Typography variant="body1" className="font-medium">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={
                      mode === "light" ? "text-gray-600" : "text-gray-300"
                    }
                  >
                    KES {item.price.toFixed(2)} x {item.quantity}
                  </Typography>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total & Buttons */}
        <div
          className={`border-t pt-4 ${mode === "light" ? "border-gray-300" : "border-gray-500"}`}
        >
          <Typography variant="h6" className="font-bold mb-4">
            Total: KES {totalPrice.toFixed(2)}
          </Typography>
          <div className="flex gap-4">
            {/* Continue Shopping Button */}
            <Button
              variant="outlined"
              fullWidth
              onClick={onClose}
              className={
                mode === "light"
                  ? "border-[#1A4D6D] text-[#1A4D6D] hover:bg-[#B3D7E0] transition-all duration-300"
                  : "border-white text-white hover:bg-[#444444] transition-all duration-300"
              }
            >
              Continue Shopping
            </Button>

            {/* Checkout Button */}
            <Button
              variant="contained"
              fullWidth
              className={
                mode === "light"
                  ? "bg-[#1A4D6D] text-white hover:bg-[#2A7A9D] transition-all duration-300"
                  : "bg-white text-[#1A4D6D] hover:bg-[#B3D7E0] transition-all duration-300"
              }
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ShoppingCart;
