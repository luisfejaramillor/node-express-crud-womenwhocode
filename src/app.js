import express from "express";
import bodyParser from "body-parser";
import { readProducts } from "../utils/readFiles.js";
import { writeProducts } from "../utils/writeFiles.js";
import { getProductById } from "../utils/getProductById.js";
import { isFormatValid } from "../middlewares/isFormatValid.js";
import { parseId } from "../utils/parseId.js";

// import { products } from "../data/products.txt";
const app = express();
const PORT = process.env.PORT || 3000;

const products = await readProducts()
const parsedProducts = JSON.parse(products)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(isFormatValid)

app.get('/api/v1/products', (req, res)=> {
  res.json(parsedProducts)
})

app.post('/api/v1/products', (req, res)=> {
  const newProduct = {id: parsedProducts.length + 1, ...req.body}
  parsedProducts.push(newProduct)
  writeProducts(JSON.stringify(parsedProducts))
  res.json(getProductById(newProduct.id, parsedProducts))
})

app.patch('/api/v1/products/:id', (req, res)=> {
  console.log(parsedProducts)
  const test = getProductById(parseId(req.params.id),parsedProducts)
  console.log(test)
  res.send('Updating data')
})

app.delete('/api/v1/products', (req, res)=> {
  res.send('Deleting data')
})






app.listen(PORT);
console.log("Listen on port 3000");
