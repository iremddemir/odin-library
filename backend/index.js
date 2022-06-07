const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Cors
app.use(cors());

// SQL Connection
var mysql_pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'odinlib'
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

const allBooksQuery = "SELECT * FROM book";
app.get("/books", (req, res) => {
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      console.error('CONNECTION error: ', err);
      res.statusCode = 503;
      res.send({
        result: 'error',
        err: err.code
      });
    } else {
      connection.query(allBooksQuery, function(err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: 'error',
            err: err.code
          });
        } else {
          res.send({
            result: 'success',
            err: '',
            data: rows
          });
        }
      });
    }
  });
});
      
app.get("/search", (req, res) => {
  const searchQuery = "SELECT * FROM book WHERE book_name LIKE '%" + req.query.search + "%'";
  console.log(searchQuery);
  mysql_pool.getConnection(function(err, connection) {
    if (err) {
      console.error('CONNECTION error: ', err);
      res.statusCode = 503;
      res.send({
        result: 'error',
        err: err.code
      });
    } else {
      connection.query(searchQuery, function(err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: 'error',
            err: err.code
          });
        } else {
          res.send({
            result: 'success',
            err: '',
            data: rows
          });
        }
      });
    }
  });
});
      
// Listen on port 4000
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
