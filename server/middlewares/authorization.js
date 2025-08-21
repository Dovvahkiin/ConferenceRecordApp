function authorization(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ Error: "Unauthorized." });

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(401).json({ Error: "Forbidden" });
    }
    next();
  };
}

module.exports = authorization;
