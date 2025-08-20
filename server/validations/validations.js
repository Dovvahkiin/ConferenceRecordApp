function createUserValidation(user = {}) {
  const { username, fname, lname, email, password, role } = user;
  const errors = [];

  if (!username || username.length < 5) {
    errors.push("Error: Username must be at least 5 characters\n");
  }
  if (!fname || fname.trim() === "") {
    errors.push("Error: First name cannot be empty\n");
  }
  if (!lname || lname.trim() === "") {
    errors.push("Error: Last name cannot be empty\n");
  }
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailValid.test(email)) {
    errors.push("Error: Invalid email address\n");
  }
  if (!password || password.length < 8) {
    errors.push("Error: Password must be at least 8 characters\n");
  }
  if (!role || role > 3) {
    errors.push("Error: Role cannot be higher than 3\n");
  }
  console.log("Errors:\n");
  return errors;
}

function loginValidation(userCredentials = {}) {
  const { username, password } = userCredentials;
  const errors = [];

  if (!username || username.trim() === "") {
    errors.push("Error: Username cannot be empty.");
  }
  if (!password || password.trim() === "") {
    errors.push("Error: Password cannot be empty.");
  }

  console.log("Errors:\n");
  return errors;
}

module.exports = { createUserValidation, loginValidation };
