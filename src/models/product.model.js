// var dbConnection = require("../../config/dbconfig");

// var Product = (product) => {
//   this.title = product.title;
//   this.description = product.description;
//   this.price = product.price;
//   this.category = product.category;
//   this.image = product.image;
//   this.rate = product.rate;
// };

// //get all products

// Product.getAllProducts = (result) => {
//   dbConnection.query("SELECT * FROM products", (err, res) => {
//     if (err) {
//       console.log("error while fetching products", err);
//       result(null, err);
//     } else {
//       console.log("products fetched successfully");
//       result(null, res);
//     }
//   });
// };

// module.exports = Product;