const jwt = require("jsonwebtoken");
const SECRET = process.env.SESSION_SECRET;

function authentication(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ Error: "Unauthorized" });

  try {
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ Error: "Invalid token" });
  }
}

module.exports = authentication;
