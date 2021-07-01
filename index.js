const express = require("express");
const { sequelize } = require("./src/models");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const db = require("./src/models");

const productRoutes = require("./src/routes/product.route");
app.use("/product", productRoutes);

const userRoutes = require("./src/routes/user.route");
app.use("/users", userRoutes);

// const khaltiRoutes = require("./src/routes/khalti.route");
// app.use("/khalti", khaltiRoutes);

const port = process.env.PORT || 5000;
db.sequelize.sync({ force: true }).then(() => {
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
