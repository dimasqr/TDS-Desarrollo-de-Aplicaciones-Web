var express = require("express");
const route = require(".");
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "desarrolloweb",
});

connection.connect(function (err) {
  if (err) {
    console.err("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as id " + connection.threadId);
});

let tasks = [];

router.get("/getTasks", function (req, res, next) {
  let queryGetTasks = "SELECT * FROM tasks;";
  connection.query(queryGetTasks, function (err, results, fields) {
    if (err) {
      res.status(500).json(tasks);
      return;
    } else {
      res.status(200).json(results);
    }
  });
});

router.delete("/deleteTask/:id", function (req, res, next) {
  if (req.params && req.params.id) {
    let id = req.params.id;
    let queryDeleteTask = "DELETE FROM tasks WHERE id = " + id + ";";
    connection.query(queryDeleteTask, function (err, results, fields) {
      if (err) {
        res.status(500).json(tasks);
        return;
      } else {
        res.status(200).json(results);
      }
    });
  } else {
    res.status(400).json({});
  }
});

router.post("/addTask", function (req, res, next) {
  if (
    req.body &&
    req.body &&
    req.body.name &&
    req.body.description &&
    req.body.dueDate
  ) {
    let queryCreateTask =
      "INSERT INTO tasks (name, description, dueDate) VALUES ('" +
      req.body.name +
      "', '" +
      req.body.description +
      "', '" +
      req.body.dueDate +
      "');";
    connection.query(queryCreateTask, function (err, results, fields) {
      if (err) {
        res.status(500).json(tasks);
        return;
      } else {
        res.status(200).json(results);
      }
    });
  }
});
module.exports = router;
