const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Cors
app.use(cors());

// SQL Connection
var mysql_pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "root",
  database: "odinlib",
  socketPath: "/tmp/mysql.sock",
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// all books query
const allBooksQuery = "SELECT * FROM book";
app.get("/books", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allBooksQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// all books with authors query
const allBooksWithAuthorsQuery = "";

app.get("/search", (req, res) => {
  let searchQuery =
    "SELECT *, book.description  FROM book, author_book, author, period WHERE book.book_id = author_book.book_id AND author.author_id = author_book.author_id AND period.period_id = book.period_id ";

  // Search by
  const searchIn = req.query.searchIn;
  console.log(searchIn);
  if (searchIn === "name") {
    searchQuery += "AND book.book_name LIKE '%" + req.query.keyword + "%' ";
  } else if (searchIn === "author") {
    searchQuery += "AND author.author_name LIKE  '%" + req.query.keyword + "%' ";
  } else if (searchIn === "description") {
    searchQuery += "AND book.description LIKE '%" + req.query.keyword + "%' ";
  } else {
    searchQuery +=
      "AND (book.book_name LIKE '%" +
      req.query.keyword +
      "%' " +
      "OR author.author_name LIKE  '%" +
      req.query.keyword +
      "%' " +
      "OR book.description LIKE '%" +
      req.query.keyword +
      "%') ";
  }

  // Sort
  const sortBy = req.query.sortBy;
  const sortOrder = req.query.sortOrder;

  if (sortBy !== "none" && sortOrder) {
    searchQuery += " ORDER BY " + sortBy + " " + sortOrder;
  }

  console.log(searchQuery);

  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(searchQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// all users query
const allUsersQuery = "SELECT * FROM user";
app.get("/users", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allUsersQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// all authors query
const allAuthorsQuery = "SELECT * FROM author";
app.get("/authors", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allAuthorsQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// all genres query
const allGenresQuery = "SELECT DISTINCT kind_genre FROM book";
app.get("/genres", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allGenresQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// all periods query
const allPeriodsQuery = "SELECT * FROM period";
app.get("/periods", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allPeriodsQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// all saved books query
const allSavedBooksQuery = "SELECT savedbooks_id FROM savedBooks WHERE user_id = " + 1; // change user_id
app.get("/savedbooks", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allSavedBooksQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// find average rating for a book
const averageBookRatingQuery = "SELECT AVG(points) AS average_bookRating FROM user_book WHERE book_id = " + 1; // change book_id
app.get("/averagebookrate", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(averageBookRatingQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
          });
        }
      });
    }
  });
});

// highest rated books by period
const highestRatedBooksQuery =
  "select b.book_name, a.author_name, p.period_name, mt.total_points from book b join (select book_id, sum(points) as total_points from user_book group by book_id) bp on bp.book_id = b.book_id join author_book ab on ab.book_id = b.book_id join author a on ab.author_id = a.author_id join period p on p.period_id = b.period_id join (select p.period_id, max(total_points) as total_points from book b join (select book_id, sum(points) as total_points from user_book group by book_id) bp on bp.book_id = b.book_id join author_book ab on ab.book_id = b.book_id join author a on ab.author_id = a.author_id join period p on p.period_id = b.period_id group by p.period_id) mt on mt.period_id = b.period_id";
app.get("/highestratedbooks", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(highestRatedBooksQuery, function (err, rows) {
        connection.release();
        if (err) {
          console.error(err);
          res.statusCode = 503;
          res.send({
            result: "error",
            err: err.code,
          });
        } else {
          res.send({
            result: "success",
            err: "",
            data: rows,
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
