
# M-TREAT

## Overview

M-TREAT is an e-commerce application built using React and Material UI. It allows users to browse through various health-related products, view product details, and add products to their shopping cart or wishlist. The app includes features such as viewing product images, reading reviews, and managing the cart (add/remove items). The app also provides a smooth experience with light and dark theme support. Please note that the cart, wishlist, and shop sections use demo data for display purposes and simulate how it would look like in a live environment.

## Features

- **Product Listings**: View a list of products with images, descriptions, and prices.
- **Product Details Page**: View detailed information about a selected product, including its price, description, and customer reviews. (Demo data used)
- **Shopping Cart**: Add items to the cart, view cart contents, and proceed to checkout. (Demo data used)
- **Wishlist**: Add products to a wishlist and view saved items. (Demo data used)
- **Shop**: Browse and select health-related products. (Demo data used)
- **Responsive Design**: The app is optimized for both mobile and desktop views.
- **Theme Support**: Switch between light and dark themes for a personalized experience.

## Technologies Used

- React
- Material UI
- React Router (for navigation)
- React State Management (useState, useContext)

## Setup Instructions

### Prerequisites

Before running the app, ensure that you have the following installed on your machine:

- **Node.js** (version 14 or above)
- **npm** (Node package manager)

You can download Node.js from [https://nodejs.org](https://nodejs.org).

### Steps to Run Locally

1. **Clone the repository**:

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/GichukiM/M-TREAT.git
   ```

2. **Navigate to the frontend folder**:

   The project files are located inside the `frontend` folder. Move into that folder:

   ```bash
   cd M-TREAT/frontend
   ```

3. **Install dependencies**:

   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Run the app**:

   After the dependencies have been installed, start the development server:

   ```bash
   npm start
   ```

   This will start the app on `http://localhost:3000`.

5. **Access the app**:

   Open a browser and go to `http://localhost:3000` to view the app.

### Running the App in Different Environments

You can switch between **light** and **dark** themes by changing the `mode` prop passed to components like `ProductPage` and `ShoppingCart`.

## Troubleshooting

- **Dependencies Issues**: If you face any issues with dependencies, try deleting the `node_modules` folder and the `package-lock.json` file, then run `npm install` again.
- **App Not Starting**: Ensure you have the correct version of Node.js installed and have run `npm install` successfully before starting the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.