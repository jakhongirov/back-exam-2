const { verify } = require("../lib//jwt");

const checkToken = (req, res, next) => {
  try {
    const {
        cookies: { token },
      } = req;

    if (!token) {
      return res.redirect("/");
    }

    const allUsers = verify(token);

    if (allUsers) {
      next();
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Yeb qoydik",
    });
  }
};

module.exports = checkToken;
