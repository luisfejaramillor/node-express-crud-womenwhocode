import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  qty: { type: Number, required: false, default: 0 },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

export const Product = mongoose.model("products", productsSchema);
