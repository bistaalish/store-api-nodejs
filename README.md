# Node.js Controller and Route Project

This project demonstrates the implementation of a Node.js API with controllers and routes designed to manage product-related data. The project uses the Express.js framework to create a structured and organized approach for handling HTTP requests.

## Installation

1. Ensure that Node.js and npm (Node Package Manager) are installed on your system.
2. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/bistaalish/store-api-nodejs.git
```
3. Navigate to the project directory:

```bash
cd store-api-node-js
```

4. Install the required dependencies by running:

```bash
npm install
```
## Usage

To run the Node.js server and test the implemented controllers and routes, follow these steps:

1. Start the server:

```
npm start
```

2. Use your preferred API testing tool (e.g., Postman, Insomnia).

3. Utilize the provided routes to interact with the API and test the functionality.

## Project Structure

The project is structured as follows:

- `controllers/`: Contains the controller functions responsible for handling the business logic of the application.
- `models/`: Includes the product model schema definition.
- `routes/`: Defines the routes for various product-related operations.
- `app.js`: The main entry point of the application where Express app configuration and route setup are done.

## Controllers

### `productController.js`

This module contains two controller functions:

1. `getAllProductsStatic`: Fetches products with prices greater than $30, sorts them by price, and returns selected fields.
2. `getAllProducts`: Accepts query parameters to filter, sort, paginate, and select specific fields from the products.

## Routes

### `productRoutes.js`

This module defines the routes for the product-related operations:

- `GET /api/products`: Endpoint to retrieve products based on query parameters.
- `GET /api/products/static`: Endpoint to retrieve specific products with prices greater than $30.

## Dependencies

The project utilizes the following main dependencies:

- Express.js: A fast, unopinionated, minimalist web framework for Node.js.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- dotenv: Loads environment variables from a .env file.
- nodemon: A development dependency for automatic server restarts during development.

---

Feel free to explore, modify, and expand upon this project as needed. It serves as a solid foundation for creating more complex Node.js applications with structured controllers and routes. If you encounter any issues or have questions, please refer to the official documentation of the used libraries and frameworks.
