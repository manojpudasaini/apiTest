const express = require("express");
const router = express.Router();
const khaltiController = require("../controllers/khalti.controller");

router.post("/", khaltiController.verifyKhaltiRequest);

module.exports = router;
