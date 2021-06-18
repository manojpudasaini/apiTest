const ProductModel = require("../models/product.model");

//get product details

exports.getProductDetails = (req, res) => {
  console.log("Details of Product");
  ProductModel.getAllProducts((err, products) => {
    console.log("We are  fetching products ");
    if (err) {
      res.send(err);
    }
    console.log("products>>", products);
    res.send(products);
  });
};
