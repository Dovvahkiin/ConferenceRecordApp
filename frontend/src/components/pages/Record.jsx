import React from "react";
import "../../styles/record.css";

function Record() {
  return (
    <div className="recordContainer">
      <button className="classicButton" id="backToHomeRecord">
        Back to Home
      </button>
      <h1>Meeting Record 1</h1>
      <h3>
        <i>
          Secretary: <span>John Doe</span>
        </i>
      </h3>
      <h4 style={{ color: "white" }}>Record:</h4>
      <p className="recordText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        placeat quidem blanditiis non, voluptates consectetur molestiae libero
        quam magni cupiditate, repellendus ab eligendi! Blanditiis, dolorum
        voluptatibus voluptates facilis voluptatem perferendis. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minima ipsum maiores,
        expedita ratione dolore assumenda nisi, laudantium ipsam officia
        inventore culpa modi non a est, eos vitae et. Sed, assumenda! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Similique, impedit.
        Ipsa, temporibus tempore quas totam repellat quisquam velit cupiditate
        dolor possimus quaerat nam eos modi sed, quod consectetur, nisi natus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        molestias magnam totam! Sint ex harum rem, maxime, sequi pariatur eum ea
        nesciunt qui earum rerum velit iure et dolores adipisci.
      </p>
    </div>
  );
}

export default Record;
