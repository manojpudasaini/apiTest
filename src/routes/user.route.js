const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.post("/", UserController.postUserDetails);
router.get("/", UserController.getAllUsers);

module.exports = router;
