const express = require("express");
const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize('neppharm', 'root', 'Root@1234', {
  host: 'localhost',
  dialect: 'mysql',
});



const User = sequelize.define('Users', {
  
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  modelName:"Users",
  tableName:"Users"
  // Other model options go here
});
//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 5000;

// //define root route for server
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// //import Product routes
// const productRoutes = require("./src/routes/product.route");

// //create product routes
// app.use("/api/v1/product", productRoutes);

//listen to port
app.listen(port, async() => {
  console.log(`Express server is running at port ${port}`);
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true });
    const jane = await User.create({ firstName: "Bikash", lastName: "Doe",phone:"900000" });
    console.log(jane)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
