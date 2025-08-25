import React from "react";

function AdminGetUsers() {
  return (
    <main className="usersContainer">
      <div className="usersContainer heading">
        <h1>Users:</h1>
      </div>
      <table className="tableUsers">
        <tr>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        <tr>
          <td>Perica</td>
          <td>Petar</td>
          <td>Perkovijanovic</td>
          <td>perkovijanovic21@gmail.com</td>
          <td>Moderator</td>
        </tr>{" "}
        <tr>
          <td>Perica</td>
          <td>Petar</td>
          <td>Perkovijanovic</td>
          <td>perkovijanovic21@gmail.com</td>
          <td>Moderator</td>
        </tr>{" "}
        <tr>
          <td>Perica</td>
          <td>Petar</td>
          <td>Perkovijanovic</td>
          <td>perkovijanovic21@gmail.com</td>
          <td>Moderator</td>
        </tr>
      </table>
    </main>
  );
}

export default AdminGetUsers;
