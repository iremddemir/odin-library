const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Cors
app.use(cors());

// SQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

console.log(connection);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen on port 4000
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
