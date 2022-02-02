const { verify } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const Allgroups = new fs(path.resolve(__dirname, "../model/groups.json"));
const users = new fs(path.resolve(__dirname, "../model/users.json"));
const groupsData = JSON.parse(Allgroups.read());
const usersData = JSON.parse(users.read()).filter((e) => e.role == "student");

const teacherController = (req, res) => {
  const group = [];
  const {
    cookies: { token },
  } = req;

  if (token) {
    const UserRole = verify(token);

    if (UserRole.role == "teacher") {
      const foundgr = groupsData.filter((e) => e.teacher_id == UserRole.id);

      for (const g of foundgr) {
        const foundStudent = usersData.filter((e) => e.group_id == g.id);
        if (foundStudent.length > 0) {
          group.push({
            id: group.length + 1,
            gr_name: g.group_name,
            student: foundStudent,
            gr_id: g.id
          });
        }
      }
    }
  }

  res.render("teacher", { gr: group });

};

module.exports = teacherController;
