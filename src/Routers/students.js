const express = require("express");
const app = express();

//Controller
const studentController = require("../Controllers/studentsController");

//GET methods
app.get("/students", studentController);

module.exports = app;
