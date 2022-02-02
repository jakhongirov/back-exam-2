const fs = require("../lib/fs");
const path = require("path");

const courses = new fs(path.resolve(__dirname, "../model/courses.json"));
const coursesData = JSON.parse(courses.read());

const coursesController = (req, res) => {
  res.render("courses", { courses: coursesData });
};

module.exports = coursesController;
