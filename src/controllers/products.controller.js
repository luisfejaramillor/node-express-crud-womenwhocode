
import { getProductById } from "../utils/getProductById.js";
import { parseId } from "../utils/parseId.js";
import { readProducts } from "../utils/readFiles.js";
import { writeProducts } from "../utils/writeFiles.js";

const getProductsWithParsedData = async () => {
    const products = await readProducts();
    if (!products) return [];
    return Array.from(JSON.parse(products));
  };
  
  // Get parsed products data
  const parsedProducts = await getProductsWithParsedData();


export const getProduct = (req, res) => {
  if (!parsedProducts.length) {
    res.status(404).json("There are not products");
    return;
  }
  res.json(parsedProducts);
};

export const createProduct = async (req, res) => {
  if (!parsedProducts) {
    const firstProduct = { id: 1, ...req.body };
    await writeProducts(JSON.stringify(firstProduct));
    res.json(getProductById(firstProduct.id, Array.from(firstProduct)));
  }
  const newProduct = { id: parsedProducts.length + 1, ...req.body };
  parsedProducts.push(newProduct);
  writeProducts(JSON.stringify(parsedProducts));
  res.json(getProductById(newProduct.id, parsedProducts));
};

export const updateProduct = (req, res, next) => {
  // Get product object by id
  const product = getProductById(parseId(req.params.id), parsedProducts);
  const keys = Object.keys(req.body);
  if (!product) {
    res.status(404).json("Product not found");
    return;
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
};

export const deleteProduct = (req, res, next) => {
  // Get product object by id
  const product = getProductById(parseId(req.params.id), parsedProducts);
  if (!product) {
    res.status(404).json("Product not found");
    return;
  }

  // Delete product from parsedProducts array
  const index = parsedProducts.findIndex((e) => e.id === product.id);
  parsedProducts.splice(index, 1);

  // This function reorders the ids of the remaining products in parsedProducts array starting from the index of the deleted product
  const reorderId = parsedProducts.map((e, i) => {
    if (i >= index) {
      e.id = e.id - 1;
      return e;
    }
    return { ...e };
  });

  writeProducts(JSON.stringify(reorderId));
  res.send(`Producto ${product.name} fue eliminado`);
};
