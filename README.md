# ShoeShop - Full-Stack eCommerce Website

This project serves as a showcase of modern web development practices and tools. Feel free to explore the codebase and contribute if you'd like!


## Features

- Browse a wide variety of shoes.
- User authentication using Passport.js for secure login and registration.
- Password hashing with Bcrypt for security.
- Secure API endpoints with CORS integration.
- Persistent data storage using MongoDB with Mongoose.
- State management with Redux Toolkit.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB database set up.

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/ggg6r34t/shoe-ecommerce-website.git
   ```

2. Change to the project directory:

   ```shell
   cd ShoeShop
   ```

### Backend dependencies:

   ```shell
   cd api
   npm install
   npm start
   ```
Set up the environment variables by creating a `.env` file in the `backend` directory. You should define variables like `PORT`, `MONGO_URI`, and other necessary configurations.


### Frontend dependencies:

   ```shell
   cd client
   npm install
   npm start
   ```

Access the website in your browser at `http://localhost:3000`.

## Backend Technologies

- Express.js: A fast, unopinionated, minimalist web framework for Node.js.
- Node.js: A JavaScript runtime for building server-side applications.
- Bcrypt: A library for securely hashing passwords.
- CORS: Middleware to enable Cross-Origin Resource Sharing.
- Passport.js: Middleware for user authentication.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB.

## Frontend Technologies

- TypeScript: A statically typed superset of JavaScript for improved code quality.
- Redux Toolkit: A library for managing application state.
- Material-UI: A popular React UI framework for building responsive and visually appealing web applications.

## Deployment

The ShoeShop website is deployed on Netlify. You can access the live demo here: [ShoeShop Live Demo](https://william-harrison.netlify.app/)

<!-- ## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) to contribute to this project.-->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
