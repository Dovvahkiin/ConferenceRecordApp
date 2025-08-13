const db = require("../testngDB/users.json");

class UserGetModel {
  GetUsers() {
    return db;
  }
  GetUserById(id) {
    return db.users.find((person) => person.id === id);
  }
}

module.exports = UserGetModel;
