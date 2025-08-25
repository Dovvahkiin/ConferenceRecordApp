import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminMenu({ setLayout }) {
  const [usersState, setUsers] = useState(false);
  const [recordsState, setRecords] = useState(false);
  const navigate = useNavigate();

  return (
    <aside className="adminMenu">
      <button
        className="selectFromPanel"
        onClick={() => {
          setUsers(!usersState);
        }}
      >
        {usersState ? "Users ▲" : "Users ▼"}
      </button>
      {usersState && (
        <div className="hiddenMenu">
          <button
            onClick={() => {
              setLayout("getusers");
              navigate("/admin?get=allusers");
            }}
          >
            Get all users
          </button>
          <button
            onClick={() => {
              setLayout("adduser");
              navigate("/admin?post=adduser");
            }}
          >
            Add new user
          </button>
          <button
            onClick={() => {
              setLayout("removeuser");
              navigate("/admin?delete=removeuser");
            }}
          >
            Remove user
          </button>
          <button>Update user</button>
        </div>
      )}
      <button
        className="selectFromPanel"
        onClick={() => {
          setRecords(!recordsState);
        }}
      >
        {recordsState ? "Records ▲" : "Records ▼"}
      </button>
      {/*       {recordsState && (
        <div className="hiddenMenu">
          <button
            onClick={() => {
              setLayout("getrecords");
            }}
          >
            Get all records
          </button>
          <button>Add new record</button>
          <button>Remove record</button>
          <button>Update record</button>
        </div>
      )} */}
    </aside>
  );
}

export default AdminMenu;
