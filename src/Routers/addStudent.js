const express = require("express");
const app = express();

//Controller
const {
  GETaddstudentsController,
  POSTaddstudentsController,
} = require("../Controllers/addStudentsController");
//GET methods
app.get("/addStudent", GETaddstudentsController);

app.post("/newstudent", POSTaddstudentsController);
module.exports = app;
