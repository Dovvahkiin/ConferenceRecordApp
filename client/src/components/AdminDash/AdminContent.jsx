import React from "react";
import AdminGetRecords from "./AdminContent/AdminRecords/AdminGetRecords";
import AdminGetUsers from "./AdminContent/AdminUsers/AdminGetUsers";
import AdminAddUser from "./AdminContent/AdminUsers/AdminAddUser";
import AdminRemoveUser from "./AdminContent/AdminUsers/AdminRemoveUser";
import AdminUpdateUser from "./AdminContent/AdminUsers/AdminUpdateUser";

function AdminContent({ activeLayout }) {
  return (
    <div>
      {activeLayout === "" && (
        <h1 style={{ textAlign: "center" }}>Welcome to Admin Dashboard</h1>
      )}
      {activeLayout === "getusers" && <AdminGetUsers />}
      {activeLayout === "adduser" && <AdminAddUser />}
      {activeLayout === "removeuser" && <AdminRemoveUser />}
      {activeLayout === "updateuser" && <AdminUpdateUser />}
      {activeLayout === "getrecords" && <AdminGetRecords />}
    </div>
  );
}

export default AdminContent;
