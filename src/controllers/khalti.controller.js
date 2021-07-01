const axios = require("axios");
require("dotenv").config();

const secretKey = process.env.TEST_SECRET_KEY;
exports.verifyKhaltiRequest = (req, res) => {
  let data = {
    token: req.body.token,
    amount: req.body.amount,
  };
  let config = {
    headers: { Authorization: secretKey },
  };
  axios
    .post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
