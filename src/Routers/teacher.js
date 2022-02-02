const express = require("express");
const app = express();

//Controller
const teacherController = require("../Controllers/teacherController");

//GET methods
app.get("/teacher", teacherController);

module.exports = app;
