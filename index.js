const express = require("express");

//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 5000;

//define root route for server
app.get("/", (req, res) => {
  res.send("Hello World");
});
//import Product routes
const productRoutes = require("./src/routes/product.route");

//create product routes
app.use("/api/v1/product", productRoutes);

//listen to port
app.listen(port, () => {
  console.log(`Express server is running at port ${port}`);
});
