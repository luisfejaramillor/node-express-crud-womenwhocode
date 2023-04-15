// Importing required modules
import express from "express";
import bodyParser from "body-parser";

// Importing local middlewares and routes
import { isFormatValid } from "./middlewares/isFormatValid.js";
import appRoutes from "./routes/products.route.js";

// Initializing the app and setting up the port number
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up middleware functions to handle requests and responses, and validating the request format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(isFormatValid);

// Setting up routes for handling URL paths
app.use("/api/v1", appRoutes);

// Listening on the specified port and logging a message
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
