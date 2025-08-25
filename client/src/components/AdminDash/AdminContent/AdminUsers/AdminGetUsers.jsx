import { useState } from "react";

const initialValue = "";
function AdminGetUsers() {
  const [username, setUsername] = useState(initialValue);

  function handleClick(e) {
    e.preventDefault();
    //todo: create search button function
    setUsername(initialValue);
  }

  return (
    <main className="usersContainer">
      <div className="usersContainer heading">
        <div className="getUserHeading">
          <div className="searchBarUsers">
            <label htmlFor="">Search Username:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
            />
            <button onClick={handleClick} className="buttonSearchAdmin">
              Search
            </button>
          </div>
        </div>
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
