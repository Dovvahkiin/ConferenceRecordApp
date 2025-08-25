import React, { useState } from "react";

const initialValues = {
  newUsername: "",
  newFirstname: "",
  newLastname: "",
  newEmail: "",
  newPassword: "",
};

function AdminAddUser() {
  const [newUser, setNewUser] = useState(initialValues);

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }
  function discardChanges(e) {
    e.preventDefault();
    setNewUser(initialValues);
  }

  //todo: add submit user

  return (
    <main className="usersContainer">
      <h1>Create a new user</h1>
      <form action="">
        <div className="addUserInput">
          <label htmlFor="username">New Username:</label>
          <input
            type="text"
            name="newUsername"
            onChange={handleChange}
            value={newUser.newUsername}
          />
        </div>
        <div className="addUserInput">
          <label htmlFor="username">New Firstname:</label>
          <input
            type="text"
            name="newFirstname"
            onChange={handleChange}
            value={newUser.newFirstname}
          />
        </div>
        <div className="addUserInput">
          <label htmlFor="username">New Lastname:</label>
          <input
            type="text"
            name="newLastname"
            onChange={handleChange}
            value={newUser.newLastname}
          />
        </div>
        <div className="addUserInput">
          <label htmlFor="username">New Email:</label>
          <input
            type="text"
            name="newEmail"
            onChange={handleChange}
            value={newUser.newEmail}
          />
        </div>
        <div className="addUserInput">
          <label htmlFor="username">New Password:</label>
          <input
            type="password"
            name="newPassword"
            onChange={handleChange}
            value={newUser.newPassword}
          />
        </div>
        <div className="addUserInput button">
          <button type="submit">Create User</button>
          <button id="discard" onClick={discardChanges}>
            Discard
          </button>
        </div>
      </form>
    </main>
  );
}

export default AdminAddUser;
