// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { logger, isAuthenticated } from "./middlewares.js";

// app.get('/profile',(req, res)=> {
//     res.send('Welcome to the progile page')
//   })
  
//   app.use(logger)
//   app.use(isAuthenticated)
  
//   app.get('/dashboard',(req, res)=> {
//     res.send('Welcome to the dashborad')
//   })
  
  
  
  
  // app.get("/", (req, res) => {
  //   res.sendFile("/static/index.html", {
  //     root: dirname(""),
  //   });
  // });
  
  // app.all("/info", (req, res) => {
  //   res.send('All response');
  // });
  
  // app.get("/hello/:users", (req, res) => {
  //   res.send(`Hello ${req.params.users}`);
  //   console.log(req.params.users)
  // });
  
  // app.get("/data", (req, res) => {
  
  //   console.log(req.query)
  //   return
  // });
  
  // app.post("/products", (req, res) => {
  //   res.send("Adding product");
  //   console.log(req.body);
  // });
  
  // app.put("/products", (req, res) => {
  //   res.send("Updating product");
  // });
  
  // app.delete("/products", (req, res) => {
  //   res.send("deleting product");
  // });
  
  // app.patch("/products", (req, res) => {
  //   res.send("Updating products part");
  // });
  
  // app.use((req, res) => {
  //   res.status(404).send("Could not find page");
  // });

  // console.log(fileURLToPath(import.meta.url))