// Importing necessary helper functions and libraries
import { Router } from "express";
import { createValidator } from "express-joi-validation";
import { schema, schemaPatch } from "../middlewares/isFormatValid.js";
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
router.get("/health", (_, res) => res.json("check"));
router.get("/products", getProduct);
router.post("/products", validator.body(schema), createProduct);
router.patch("/products/:id", validator.body(schemaPatch), updateProduct);
router.delete("/products/:id", deleteProduct);

// Exporting the router to be used in the main application file
export default router;
