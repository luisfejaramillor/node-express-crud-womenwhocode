// Importing required modules
import express from "express";
import bodyParser from "body-parser";
import appRoutes from "./routes/index.js";
import dotenv from "dotenv";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
