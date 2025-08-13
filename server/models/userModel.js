const users = require("../testngDB/db.json");

class UserModel {
  GetUsers(req, res, next) {
    return users;
  }
}

module.exports = UserModel;
