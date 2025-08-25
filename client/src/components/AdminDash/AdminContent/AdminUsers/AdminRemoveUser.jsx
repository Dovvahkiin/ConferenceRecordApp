import React from "react";

function AdminRemoveUser() {
  //todo: function for remove by id from same row

  return (
    <main className="usersContainer">
      <div className="usersContainer heading">
        <h1>Remove user</h1>
      </div>
      <table className="tableUsers">
        <tr>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Perica</td>
          <td>Petar</td>
          <td>Perkovijanovic</td>
          <td>perkovijanovic21@gmail.com</td>
          <td>Moderator</td>
          <td>
            <button id="removeUserButton">Remove</button>
          </td>
        </tr>
        <tr>
          <td>Perica</td>
          <td>Petar</td>
          <td>Perkovijanovic</td>
          <td>perkovijanovic21@gmail.com</td>
          <td>Moderator</td>
          <td>
            <button id="removeUserButton">Remove</button>
          </td>
        </tr>
        <tr>
          <td>Perica</td>
          <td>Petar</td>
          <td>Perkovijanovic</td>
          <td>perkovijanovic21@gmail.com</td>
          <td>Moderator</td>
          <td>
            <button id="removeUserButton">Remove</button>
          </td>
        </tr>
      </table>
    </main>
  );
}

export default AdminRemoveUser;
