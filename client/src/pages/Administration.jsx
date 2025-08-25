import { useState } from "react";
import Header from "../components/Header/Header";
import "../styles/admin.css";
import AdminMenu from "../components/AdminDash/AdminMenu";
import AdminContent from "../components/AdminDash/AdminContent";
//TODO: Create page for administration

function Administration() {
  const [activeLayout, setLayout] = useState("");

  return (
    <main>
      <Header />
      <section className="adminDash">
        <AdminMenu setLayout={setLayout} />
        <AdminContent activeLayout={activeLayout} />
      </section>
    </main>
  );
}

export default Administration;
