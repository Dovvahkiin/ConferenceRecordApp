import React from "react";
import "../../styles/home.css";

function Home() {
  return (
    <div className="homeContainer">
      <h1>Welcome to the homepage</h1>
      <div className="categoryRecord">
        <h2>Meeting record 1</h2>
        <p>
          Date: <span>01.01.2025.</span>
        </p>
      </div>
      <div className="categoryRecord">
        <h2>Meeting record 2</h2>
        <p>
          Date: <span>03.04.2025. </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
