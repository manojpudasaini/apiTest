const { Product } = require("../models");

exports.postProductDetails = async (req, res) => {
  const product = await Product.create({
    title: "product_title",
    description: "product_description",
    price: 100,
    category: "my_category",
    image: "image_link",
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send(product);
  return product;
};
