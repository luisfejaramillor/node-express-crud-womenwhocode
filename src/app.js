import express from "express";
import bodyParser from "body-parser";
import { getProducts } from "../utils/readFiles.js";
import { writeProducts } from "../utils/writeFiles.js";
// import { products } from "../data/products.txt";
const app = express();
const PORT = process.env.PORT || 3000;

const products = await getProducts()
const parsedProducts = JSON.parse(products)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());


app.get('/products', async(req, res)=> {
  console.log(products)
  res.json(parsedProducts)
})

app.get('/products:id', (req, res)=> {
  res.send('Getting specific data')
})

app.post('/products', (req, res)=> {
  parsedProducts.push({id: parsedProducts.length + 1, ...req.body})
  writeProducts(JSON.stringify(parsedProducts))
  res.json(parsedProducts)

})

app.put('/products', (req, res)=> {
  res.send('Updating data')
})

app.delete('/products', (req, res)=> {
  res.send('Deleting data')
})






app.listen(PORT);
console.log("Listen on port 3000");
