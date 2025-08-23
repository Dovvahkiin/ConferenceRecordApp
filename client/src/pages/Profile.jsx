import React from "react";
import Header from "../components/Header/Header";
import "../styles/general.css";

function Profile() {
  return (
    <main>
      <Header />
      <section className="mainFormat">
        <h1 id="profileTitle">Profile Page</h1>
        <article className="profileContainer">
          <p>
            First name: <span id="firstNameProfile">Test</span>
          </p>
          <p>
            LastName: <span id="lastNameProfile">Testovic</span>
          </p>
          <p>
            Email address: <span id="emailProfile">test@gmail.com</span>
          </p>
          <p>
            Role: <span id="roleProfile">Moderator</span>
          </p>
        </article>
      </section>
    </main>
  );
}

export default Profile;
