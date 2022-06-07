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

// book query
const bookQuery =
  "SELECT *, book.description FROM book, author_book, author, period WHERE book.book_id = author_book.book_id AND author.author_id = author_book.author_id AND book.book_id = ? AND period.period_id = book.period_id";
app.get("/book/:id", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(bookQuery, [req.params.id], function (err, rows) {
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
            data: rows[0],
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

  // Search Type
  const isExact = req.query.searchType === "exact";

  // Search by
  const searchIn = req.query.searchIn;

  if (searchIn === "name") {
    searchQuery += isExact ? `AND book.book_name='${req.query.keyword}' ` : `AND book.book_name LIKE '%${req.query.keyword}%' `;
  } else if (searchIn === "author") {
    searchQuery += isExact ? `AND author.author_name='${req.query.keyword}' ` : `AND author.author_name LIKE  '% ${req.query.keyword} "%' `;
  } else if (searchIn === "description") {
    searchQuery += isExact ? `AND book.description='${req.query.keyword}' ` : `AND book.description LIKE '% ${req.query.keyword}%' `;
  } else {
    searchQuery += isExact
      ? `AND (book.book_name='${req.query.keyword}' OR author.author_name='${req.query.keyword}' OR book.description='${req.query.keyword}') `
      : `AND (book.book_name LIKE '%${req.query.keyword}%' OR author.author_name LIKE '%${req.query.keyword}%' OR book.description LIKE '%${req.query.keyword}%') `;
  }

  // Filter by period
  const periods = req.query.period;
  if (periods) {
    searchQuery += `AND period.period_id IN (${periods}) `;
  }

  // Filter by kind/genre
  const kinds = req.query.kind;
  if (kinds) {
    searchQuery += `AND book.kind_genre IN (${kinds}) `;
  }

  // Filter by language
  // TO-DO
  const languages = req.query.language;
  if (languages) {
    searchQuery += `AND book.language IN  (${languages}) `;
  }

  // Filter by hasSummary
  const hasSummary = req.query.hasSummary;

  if (hasSummary === "yes") {
    searchQuery += `AND book.summary!='' AND book.summary IS NOT NULL `;
  } else if (hasSummary === "no") {
    searchQuery += `AND (book.summary='' OR book.summary IS NULL) `;
  }

  // Sort
  const sortBy = req.query.sortBy;
  const sortOrder = req.query.sortOrder;

  if (sortBy !== "none" && sortOrder) {
    searchQuery += " ORDER BY " + sortBy + " " + sortOrder;
  }

  // Pagination
  const page = req.query.page;
  const pageSize = req.query.pageSize;

  let withPagination = "";
  if (page && pageSize) {
    withPagination = searchQuery + ` LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize} `;
  }

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

        const totalCount = rows.length;

        connection.query(withPagination, function (err, rows) {
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
              totalCount: totalCount,
            });
          }
        });
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

// all languages query
const allLanguagesQuery = "SELECT DISTINCT language FROM book";
app.get("/languages", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(allLanguagesQuery, function (err, rows) {
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

// popular periods query
const popularPeriodsQuery =
  "select distinct(p.period_name), bp.total_points from book b join (select book_id, sum(points) as total_points from user_book group by user_book.book_id) bp on bp.book_id = b.book_id join period p on b.period_id = p.period_id order by bp.total_points DESC limit 5";
app.get("/popularPeriods", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(popularPeriodsQuery, function (err, rows) {
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

// highest rated books
const highestRatedBooksQuery =
  "select * from book b join (select book_id, sum(points) as total_points from user_book group by book_id) bp on bp.book_id = b.book_id join author_book ab on ab.book_id = b.book_id join author a on ab.author_id = a.author_id join period p on p.period_id = b.period_id join (select p.period_id, max(total_points) as total_points from book b join (select book_id, sum(points) as total_points from user_book group by book_id) bp on bp.book_id = b.book_id join author_book ab on ab.book_id = b.book_id join author a on ab.author_id = a.author_id join period p on p.period_id = b.period_id group by p.period_id) mt on mt.period_id = b.period_id";
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

// highest rated authors
const highestRatedAuthorsQuery =
  "select a.author_name, bp.total_points from book b join (select book_id, sum(points) as total_points from user_book group by book_id) bp on bp.book_id = b.book_id join author_book ab on ab.book_id = b.book_id join author a on a.author_id = ab.author_id order by bp.total_points DESC limit 5";

app.get("/highestratedauthors", (req, res) => {
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(highestRatedAuthorsQuery, function (err, rows) {
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

// fuzzy search books by name info query

app.get("/fuzzysearchbytitle", (req, res) => {
  const fuzzySearchByTitleQuery =
    "SELECT ban.book_name, ban.description, ban.author_name, abr.average_bookRating from (SELECT AVG(user_book.points) AS average_bookRating, user_book.book_id FROM user_book group by user_book.book_id)abr right join (SELECT author.author_name, baid.book_name, baid.description, baid.book_id from author join (SELECT book.book_name, book.description, author_book.author_id, book.book_id from book join author_book on book.book_id = author_book.book_id) baid on author.author_id = baid.author_id) ban on ban.book_id = abr.book_id where ban.book_name like '%" +
    req.query.search +
    "%'";
  console.log(fuzzySearchByTitleQuery);
  mysql_pool.getConnection(function (err, connection) {
    if (err) {
      console.error("CONNECTION error: ", err);
      res.statusCode = 503;
      res.send({
        result: "error",
        err: err.code,
      });
    } else {
      connection.query(fuzzySearchByTitleQuery, function (err, rows) {
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
