const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const courses = new fs(path.resolve(__dirname, "../model/courses.json"));
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const coursesData = JSON.parse(courses.read());
const usersData = JSON.parse(users.read()).filter((e) => e.role == "teacher");
const groups = new fs(path.resolve(__dirname, "../model/groups.json"));
const groupsData = JSON.parse(groups.read());

const GETaddGroupController = (req, res) => {
  res.render("addgroups", { teachers: usersData, courses: coursesData });
};

const POSTaddGroupController = (req, res) => {
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "admin") {
      const { groupName, teacherID, courseID } = req.body;

      const newGroup = {};

      newGroup.id = groupsData.length + 1;
      newGroup.group_name = groupName;
      newGroup.teacher_id = courseID;
      newGroup.teacher_id = teacherID;

      groupsData.push(newGroup);

      groups.write(coursesData);

      res.redirect("/admin");
    }
  }
};

module.exports = {
  GETaddGroupController,
  POSTaddGroupController,
};
