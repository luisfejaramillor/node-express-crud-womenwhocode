// Importing necessary helper functions and modules
import { getProductById } from "../utils/getProductById.js";
import { parseId } from "../utils/parseId.js";
import { readProducts } from "../utils/readFiles.js";
import { writeProducts } from "../utils/writeFiles.js";

// Function to retrieve all products along with parsing incoming data
const getProductsWithParsedData = async () => {
  const products = await readProducts();
  if (!products) return [];
  return Array.from(JSON.parse(products));
};

// Retrieving parsed products data
const parsedProducts = await getProductsWithParsedData();

// Function to handle GET request for product(s)
export const getProduct = (req, res) => {
  if (!parsedProducts.length) {
    res.status(404).json("There are no products");
    return;
  }

  res.json(parsedProducts);
};

// Function to create a new product
export const createProduct = async (req, res) => {
  if (!parsedProducts) {
    const firstProduct = { id: 1, ...req.body };
    await writeProducts(JSON.stringify(firstProduct));

    res.json(getProductById(firstProduct.id, Array.from(firstProduct)));
  }
  // Creating a new product with an incremented ID and writing it to the database
  const newProduct = { id: parsedProducts.length + 1, ...req.body };
  parsedProducts.push(newProduct);
  writeProducts(JSON.stringify(parsedProducts));

  res.json(getProductById(newProduct.id, parsedProducts));
};

// Function to update an existing product
export const updateProduct = (req, res, next) => {
  const product = getProductById(parseId(req.params.id), parsedProducts);

  const keys = Object.keys(req.body);

  if (!product) {
    res.status(404).json("Product not found");
    return;
  }
  // Finding the new version of the product and updating the necessary fields
  const newProduct = parsedProducts.find((prop) => {
    if (product.id === prop.id) {
      keys.forEach((key) => {
        if (product[key]) {
          prop[key] = req.body[key];
        }
      });
      return prop;
    }
  });
  // Writing the updated products data to the database
  writeProducts(JSON.stringify(parsedProducts));

  res.json(getProductById(newProduct.id, parsedProducts));
};

// Function to delete an existing product
export const deleteProduct = (req, res, next) => {
  const product = getProductById(parseId(req.params.id), parsedProducts);

  if (!product) {
    res.status(404).json("Product not found");
    return;
  }
  // Removing the product from the products array
  const index = parsedProducts.findIndex((e) => e.id === product.id);
  parsedProducts.splice(index, 1);
  // Reordering the remaining products' IDs after deletion
  const reorderId = parsedProducts.map((e, i) => {
    if (i >= index) {
      e.id = e.id - 1;
      return e;
    }
    return { ...e };
  });
  // Writing the reordered products data to the database
  writeProducts(JSON.stringify(reorderId));

  res.send(`Product ${product.name} was deleted`);
};
