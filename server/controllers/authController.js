const chalk = require("chalk");
const { UserGetModel, UserPostModel } = require("../models/userModel.js");
const { loginValidation } = require("../validations/validations.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const [userGetInstance, userPostInstance] = [
  new UserGetModel(),
  new UserPostModel(),
];

class AuthenticationController {
  async LoginUserControl(req, res) {
    const userData = req.body;

    const errors = loginValidation(userData);
    if (errors.length > 0) {
      console.log("Validation errors:\n" + chalk.red(errors));
      return res.status(400).json({ Error: errors });
    }

    try {
      const { username, password } = userData;
      const loginUser = await userGetInstance.LoginUser(username);

      if (!loginUser || loginUser.length === 0) {
        console.log("Invalid username or password!");
        return res.status(500).json({ Error: "Invalid credentials." });
      }
      const passwordMatch = await bcrypt.compare(password, loginUser.Password);

      if (!passwordMatch) {
        console.log("Invalid username or password!");
        return res.status(500).json({ Error: "Invalid credentials." });
      }

      const token = jwt.sign(
        {
          id: loginUser.ID,
          username: loginUser.Username,
        },
        process.env.SESSION_SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
      });

      console.log(
        "User: " + chalk.green(username) + " is successfully logged in."
      );
      res.status(200).json({ Success: true, token });
    } catch (err) {
      console.log("TryCatch Error: " + err);
      res.status(500).json({ Error: err.message });
    }
  }
}

module.exports = AuthenticationController;
