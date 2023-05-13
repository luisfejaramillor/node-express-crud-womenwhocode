import { Router } from "express";
import { createValidator } from "express-joi-validation";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/index.js";
import { schemaUser, schemaUserPatch } from "../middlewares/index.js";

const router = Router();

// Creating a validator for incoming requests using express-joi-validation library
const validator = createValidator({});

router.get("/", getUsers);
router.post("/", validator.body(schemaUser), createUser);
router.patch("/:id", validator.body(schemaUserPatch), updateUser);
router.delete("/:id", deleteUser);
export default router;
