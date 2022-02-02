const express = require("express");
const app = express();

//Controller
const {
  GETaddCoursesController,
  POSTaddCoursesController,
} = require("../Controllers/addCoursesController");
//GET methods
app.get("/addCourses", GETaddCoursesController);
app.post("/newcourses", POSTaddCoursesController);

module.exports = app;
