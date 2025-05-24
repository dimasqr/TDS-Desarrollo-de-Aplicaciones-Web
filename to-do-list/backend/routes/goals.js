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

let goals = [];

router.get("/getGoals", function (req, res, next) {
  let queryGetGoals = "SELECT * FROM goals;";
  connection.query(queryGetGoals, function (err, results, fields) {
    if (err) {
      res.status(500).json(goals);
      return;
    } else {
      res.status(200).json(results);
    }
  });
});

router.delete("/deleteGoal/:id", function (req, res, next) {
  if (req.params && req.params.id) {
    let id = req.params.id;
    let queryDeleteGoal = "DELETE FROM goals WHERE id = " + id + ";";
    connection.query(queryDeleteGoal, function (err, results, fields) {
      if (err) {
        res.status(500).json(goals);
        return;
      } else {
        res.status(200).json(results);
      }
    });
  } else {
    res.status(400).json({});
  }
});

router.post("/addGoal", function (req, res, next) {
  if (
    req.body &&
    req.body &&
    req.body.name &&
    req.body.description &&
    req.body.dueDate
  ) {
    let queryCreateGoal =
      "INSERT INTO goals (name, description, dueDate) VALUES ('" +
      req.body.name +
      "', '" +
      req.body.description +
      "', '" +
      req.body.dueDate +
      "');";
    connection.query(queryCreateGoal, function (err, results, fields) {
      if (err) {
        res.status(500).json(goals);
        return;
      } else {
        res.status(200).json(results);
      }
    });
  }
});

module.exports = router;
