// Importing required libraries and modules
import express from "express";
import bodyParser from "body-parser";
import { readProducts } from "../utils/readFiles.js";
import { writeProducts } from "../utils/writeFiles.js";
import { getProductById } from "../utils/getProductById.js";
import { isFormatValid, paramsSchema } from "../middlewares/isFormatValid.js";
import { parseId } from "../utils/parseId.js";
import { createValidator } from "express-joi-validation";

// Initialize an express app and define port number
const app = express();
const PORT = process.env.PORT || 3000;

// Create a validator object with Joi library
const validator = createValidator({});

// Define a function to get parsed products data
const getProductsWithParsedData = async () => {
  const products = await readProducts();
  if (!products) return [];
  return Array.from(JSON.parse(products));
};

// Get parsed products data
const parsedProducts = await getProductsWithParsedData();

// Use middleware functions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(isFormatValid);

// Define routes for HTTP methods
app.get("/api/v1/products", (req, res) => {
  if (!parsedProducts.length) {
    res.status(404).json("There are not products");
    return;
  }
  res.json(parsedProducts);
});

app.post("/api/v1/products", async (req, res) => {
  if (!parsedProducts) {
    const firstProduct = { id: 1, ...req.body };
    await writeProducts(JSON.stringify(firstProduct));
    res.json(getProductById(firstProduct.id, Array.from(firstProduct)));
  }
  const newProduct = { id: parsedProducts.length + 1, ...req.body };
  parsedProducts.push(newProduct);
  writeProducts(JSON.stringify(parsedProducts));
  res.json(getProductById(newProduct.id, parsedProducts));
});

app.patch(
  "/api/v1/products/:id",
  validator.params(paramsSchema),
  (req, res, next) => {
    // Get product object by id
    const product = getProductById(parseId(req.params.id), parsedProducts);
    const keys = Object.keys(req.body);
    if (!product) {
      res.status(404).json("Product not found");
      return
    }

    // Update the values of the specified properties with new values in request body
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
    writeProducts(JSON.stringify(parsedProducts));
    res.json(getProductById(newProduct.id, parsedProducts));
  }
);

app.delete(
  "/api/v1/products/:id",
  validator.params(paramsSchema),
  (req, res, next) => {
    // Get product object by id
    const product = getProductById(parseId(req.params.id), parsedProducts);
    if (!product) {
      res.status(404).json("Product not found");
      return
    }

    // Delete product from parsedProducts array
    const index = parsedProducts.findIndex((e) => e.id === product.id);
    parsedProducts.splice(index, 1);

    // This function reorders the ids of the remaining products in parsedProducts array starting from the index of the deleted product
    const reorderId = parsedProducts.map((e,i) => {
        if(i >= index){
          e.id = e.id-1
          return e
        }
        return {...e}
    })

    writeProducts(JSON.stringify(reorderId));
    res.send(`Producto ${product.name} fue eliminado`);
  }
);

// Listen to requests on PORT
app.listen(PORT);
console.log("Listen on port 3000");
