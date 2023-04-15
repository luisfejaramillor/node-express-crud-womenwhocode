// Importing necessary helper functions and libraries
import { Router } from "express";
import { createValidator } from "express-joi-validation";
import { paramsSchema } from "../middlewares/isFormatValid.js";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// Creating a new router instance
const router = Router();

// Creating a validator for incoming requests using express-joi-validation library
const validator = createValidator({});

// Defining routes with corresponding controller functions
router.get("/products", getProduct);
router.post("/products", createProduct);
router.patch("/products/:id", validator.params(paramsSchema), updateProduct);
router.delete("/products/:id", validator.params(paramsSchema), deleteProduct);

// Exporting the router to be used in the main application file
export default router;
