import React from "react";
import "../../styles/home.css";

function Home() {
  return (
    <div className="homeContainer">
      <h1>Dobrodosli na homepage</h1>
      <div className="categoryRecord">
        <h2>Evidencija sa sednice 1</h2>
        <p>
          Datum: <span>01.01.2025.</span>
        </p>
      </div>
      <div className="categoryRecord">
        <h2>Evidencija sa sednice 2</h2>
        <p>
          Datum: <span>03.04.2025.</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
