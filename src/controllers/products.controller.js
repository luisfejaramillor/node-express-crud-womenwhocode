// Importing necessary helper functions and modules
import { Product } from "../models/productModel.js";

export const getProduct = async (_, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(404), json("There are not products");
  }
};

// Function to create a new product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json("There was a problem with the server");
  }
};

// Function to update an existing product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json("Could not found product");
  }
};

// Function to delete an existing product
export const deleteProduct = async (req, res) => {
  try {
    const { name } = await Product.findOneAndDelete(
      { _id: req.params.id },
      {
        new: true,
      }
    );
    res.json(`Product ${name} was deleted`);
  } catch (error) {
    res.status(404).json("Could not found product");
  }
};
