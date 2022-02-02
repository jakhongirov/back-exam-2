const loginController = (req, res) => {
  const userRole = req.body.role;
  const {
    cookies: { token },
  } = req;

  if (token) {
    if (userRole == "admin") {
      res.redirect("/admin");
    } else if (userRole == "teacher") {
      res.redirect("/teacher");
    } else if (userRole == "student") {
      res.redirect("/student");
    } else {
      res.send("tur yoqol");
    }
  } else {
    res.send("tur yoqol");
  }
};

module.exports = loginController;
