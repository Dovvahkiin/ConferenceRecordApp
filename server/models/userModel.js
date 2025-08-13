class UserModel {
  GetUsers(req, res, next) {
    return [
      {
        id: "1",
        name: "John",
        department: "IT",
      },
      {
        id: "2",
        name: "Mark",
        department: "Bussiness",
      },
    ];
  }
}

module.exports = UserModel;
