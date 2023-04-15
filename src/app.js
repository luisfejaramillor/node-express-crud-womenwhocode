// Importing required libraries and modules
import express from "express";
import bodyParser from "body-parser";
import { isFormatValid } from "./middlewares/isFormatValid.js";
import appRoutes from "./routes/products.route.js";

// Initialize an express app and define port number
const app = express();
const PORT = process.env.PORT || 3000;

// Create a validator object with Joi library


// Define a function to get parsed products data


// Use middleware functions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(isFormatValid);
app.use('/api/v1',appRoutes)

// Listen to requests on PORT
app.listen(PORT);
console.log(`Listen on port ${3000}`);
