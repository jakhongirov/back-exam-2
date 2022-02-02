const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const courses = new fs(path.resolve(__dirname, "../model/courses.json"));
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const coursesData = JSON.parse(courses.read());
const usersData = JSON.parse(users.read()).filter(e => e.role == 'teacher');

// console.log(usersData);

const GETaddCoursesController = (req, res) => {
  res.render("addcourses", { teachers: usersData });
};

const POSTaddCoursesController = (req, res) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "admin") {
      const { courseName, coursePrice, teacherID } = req.body;

      const newCourses = {};

      newCourses.id = coursesData.length + 1;
      newCourses.course_name = courseName;
      newCourses.price = coursePrice + 'sum';
      newCourses.teacher_id = teacherID;

      coursesData.push(newCourses);

      courses.write(coursesData);

      res.redirect("/admin");
    }
  }
};

module.exports = {
  GETaddCoursesController,
  POSTaddCoursesController,
};
