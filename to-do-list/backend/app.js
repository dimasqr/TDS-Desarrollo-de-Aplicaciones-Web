var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tasksRouter = require("./routes/tasks");
var goalsRouter = require("./routes/goals");

const mysql = require("mysql");
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

let queryCreateDB = "CREATE DATABASE IF NOT EXISTS desarrolloweb";

/// Table Goals ///
let queryCreateTableGoals =
  "CREATE TABLE IF NOT EXISTS `goals` ( \
  `id` int(11) NOT NULL AUTO_INCREMENT, \
  `name` varchar(250) NOT NULL DEFAULT '', \
  `description` varchar(250) NOT NULL DEFAULT '', \
  `dueDate` varchar(250) NOT NULL DEFAULT '', \
  PRIMARY KEY (`id`) \
);";

/// Table Tasks ///
let queryCreateTableTasks =
  "CREATE TABLE IF NOT EXISTS `tasks` ( \
  `id` int(11) NOT NULL AUTO_INCREMENT, \
  `name` varchar(250) NOT NULL DEFAULT '', \
  `description` varchar(250) NOT NULL DEFAULT '', \
  `dueDate` varchar(250) NOT NULL DEFAULT '', \
  PRIMARY KEY (`id`) \
);";

connection.query(queryCreateDB, function (err, results, fields) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(results);
  }
});

/// Connection to Table Goals ///
connection.query(queryCreateTableGoals, function (err, results, fields) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(results);
  }
});

/// Connection to Table Tasks ///
connection.query(queryCreateTableTasks, function (err, results, fields) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(results);
  }
});

connection.destroy();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use((req, res, next) => {
  if (req.headers.authorization && req.headers.authorization === "123") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.use("/goals", goalsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
