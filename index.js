const express = require("express");
const { sequelize } = require("./src/models");

const app = express();

const port = process.env.PORT || 5000;

const db = require("./src/models");

const productRoutes = require("./src/routes/product.route");
app.use("/create", productRoutes);

db.sequelize.sync().then((req) => {
  app.listen(port, async () => {
    console.log("server running");
    try {
      await sequelize.authenticate();
      console.log("connection established successfully");
    } catch (error) {
      console.log("unable to connect to database", error);
    }
  });
});
