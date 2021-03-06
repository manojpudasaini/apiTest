const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/", productController.postProductDetails);

module.exports = router;
