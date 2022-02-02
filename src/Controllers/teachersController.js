const fs = require("../lib/fs");
const path = require("path");

// const courses = new fs(path.resolve(__dirname, "../model/courses.json"));
// const coursesData = JSON.parse(courses.read());
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const TeacherData = JSON.parse(users.read()).filter((e) => e.role == "teacher");

const teacherController = (req, res) => {
  res.render("teachers", { teachers: TeacherData });
};

module.exports = teacherController;
