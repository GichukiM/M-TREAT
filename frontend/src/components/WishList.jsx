import { Drawer, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from '@mui/icons-material/Delete';

// eslint-disable-next-line react/prop-types
const Wishlist = ({ open, onClose, mode }) => {
  // Dummy Wishlist Data
  const wishlist = [
    { id: 1, name: "Pulse-Reader", price: 20000, image: "/Pulse.jpg" },
    { id: 2, name: "Smart Therm", price: 45000, image: "/Smart-Therm.jpg" },
    { id: 3, name: "BP-Monitor", price: 3500, image: "/BP-Monitor.jpg" },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        className={`w-80 md:w-96 p-6 flex flex-col h-full transition-all duration-300 ${
          mode === "light" ? "bg-white text-[#1A4D6D]" : "bg-[#1A4D6D] text-white"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6" className="text-lg font-bold">
            Your Wishlist
          </Typography>
          <IconButton
            onClick={onClose}
            className={mode === "light" ? "text-[#1A4D6D]" : "text-white"}
          >
            <CloseIcon />
          </IconButton>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto">
          {wishlist.length === 0 ? (
            <Typography
              className={`${
                mode === "light" ? "text-gray-600" : "text-gray-300"
              } text-center`}
            >
              Your wishlist is empty.
            </Typography>
          ) : (
            wishlist.map((item, index) => (
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
                    className={mode === "light" ? "text-gray-600" : "text-gray-300"}
                  >
                    KES {item.price.toFixed(2)}
                  </Typography>
                </div>
                <IconButton
                  color="secondary"
                  onClick={() => console.log(`Remove ${item.name} from wishlist`)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))
          )}
        </div>

        {/* Buttons */}
        <div
          className={`border-t pt-4 ${
            mode === "light" ? "border-gray-300" : "border-gray-500"
          }`}
        >
          <div className="flex gap-4">
            {/* Continue Browsing Button */}
            <Button
              variant="outlined"
              fullWidth
              onClick={onClose}
              className={
                mode === "light"
                  ? "border-[#1A4D6D] text-[#1A4D6D] hover:bg-[#B3D7E0] transition-all duration-300"
                  : "border-white text-white bg-transparent hover:bg-[#444444] transition-all duration-300"
              }
            >
              Continue Browsing
            </Button>

            {/* Proceed to Checkout Button */}
            <Button
              variant="contained"
              fullWidth
              className={
                mode === "light"
                  ? "bg-[#1A4D6D] text-white hover:bg-[#2A7A9D] transition-all duration-300"
                  : "bg-white text-[#1A4D6D] hover:bg-[#B3D7E0] transition-all duration-300"
              }
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Wishlist;
