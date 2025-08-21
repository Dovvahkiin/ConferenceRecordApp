const jwt = require("jsonwebtoken");

function ifAuthenticated(req, res, next) {
  const token = req.cookies.token;
  if (!token) return next();

  try {
    jwt.verify(token, process.env.SESSION_SECRET);
    return res.status(403).json({
      Error:
        "You cannot access login / register page, because you are already logged in",
    }); // change when homepage is created to: ==>    return res.status(403).redirect("/");
  } catch (err) {
    next();
  }
}

module.exports = ifAuthenticated;
