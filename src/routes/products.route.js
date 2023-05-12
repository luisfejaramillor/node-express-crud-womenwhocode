// Importing necessary helper functions and libraries
import { Router } from "express";
import { createValidator } from "express-joi-validation";
import { schema, schemaPatch } from "../middlewares/index.js";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/index.js";
// Creating a new router instance
const router = Router();

// Creating a validator for incoming requests using express-joi-validation library
const validator = createValidator({});

// Defining routes with corresponding controller functions
router.get("/", getProduct);
router.post("/", validator.body(schema), createProduct);
router.patch("/:id", validator.body(schemaPatch), updateProduct);
router.delete("/:id", deleteProduct);

// Exporting the router to be used in the main application file
export default router;
