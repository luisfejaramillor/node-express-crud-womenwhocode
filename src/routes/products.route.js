import { Router } from "express";
import { createValidator } from "express-joi-validation";
import { paramsSchema } from "../middlewares/isFormatValid.js";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";


const router = Router();

const validator = createValidator({});

router.get("/products", getProduct);
router.post("/products", createProduct);
router.patch("/products/:id", validator.params(paramsSchema), updateProduct);
router.delete("/products/:id", validator.params(paramsSchema), deleteProduct);

export default router;
