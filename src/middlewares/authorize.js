const { sign } = require("../lib/jwt");
const fs = require("../lib/fs");
const path = require("path");

const users = new fs(path.resolve(__dirname, "../model/users.json"));
const usersData = JSON.parse(users.read());

const authorize = (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = usersData.find(
      (e) => e.user_name == username && e.password == password
    );
    req.body.role = user.role;

    if (user) {
      res.cookie("token", sign({ role: user.role, id: user.id }));
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: 500,
      massage: "Internal Server Error",
    });
  }
};

module.exports = authorize;
