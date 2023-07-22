Fran's Shopping Cart - E-commerce App

Fran's Shopping Cart is an e-commerce web application built with React and TypeScript that allows users to browse and purchase movies. Users can also create wishlists by logging in with hardcoded credentials. The app interacts with the backend through the following endpoints:

Movie API Endpoint: http://localhost:3004/PRODUCTS
User API Endpoint: http://localhost:3005/USERS

**Table of Contents
Features
Getting Started
Prerequisites
Installation
Usage
API Endpoints
Contributing
License**

Browse a wide selection of movies
Add movies to the cart and proceed to checkout
Create and manage a personal wishlist (requires user login)
User authentication for wishlists (hardcoded credentials)


Getting Started
Follow these instructions to set up the project on your local machine.

Prerequisites
npm
Git

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/franpalberca/shopping-cart-with-React
cd react-shopping-project

Install dependencies:
Copy code
npm install

Usage
To start the development server and run the app locally, use the following command:

sql
Copy code
npm start
Open your web browser and navigate to http://localhost:3000 to access the Fran's Shopping Cart app.

API Endpoints
The app interacts with the backend through the following endpoints:

Movie API Endpoint: http://localhost:3004/PRODUCTS
This endpoint provides movie data, such as title, description, price, etc.

User API Endpoint: http://localhost:3005/USERS
This endpoint is used for user authentication when accessing the wishlist feature. (Note: User authentication is currently implemented with hardcoded credentials for demonstration purposes.)
Please ensure that the backend server is running and properly configured for the app to work correctly.

Contributing
We welcome contributions from the community! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

License
This app is provided as-is and is intended for learning purposes only. You are free to use, modify, and distribute it for educational or personal use without any restrictions. However, please note that the app may contain third-party resources with their own usage rights, and it is your responsibility to comply with any applicable licenses or terms associated with those resources.