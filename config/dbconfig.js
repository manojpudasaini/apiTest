const mysql = require("mysql");

// create mysql db connection

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hello123",
  database: "neppharm",
});

dbConnection.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected successfully");
});

module.exports = dbConnection;
