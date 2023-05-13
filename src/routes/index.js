import { Router } from "express";
const router = Router();

import appRoutes from "./products.route.js";
import userRoutes from "./users.route.js"
import { healthCheck, welcomePage } from "../controllers/appController.js";

router.get("/health", healthCheck)
router.get("/", welcomePage)
router.use("/api/v1/products", appRoutes);
router.use("/api/v1/users",userRoutes);

export default router;
