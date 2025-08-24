import React from "react";
import Header from "../components/Header/Header";

function Record() {
  //todo: if record does not exists show 404
  //todo: load page from db
  return (
    <main>
      <Header />
      <h1>This is record name</h1>
      <section className="mainFormat">
        <div>
          <h2>Title:</h2>
          <p>This is title</p>
          <h2>Content:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            deleniti accusamus. Ratione quod quas cumque quo, est repellat.
            Molestias placeat vel dolorem explicabo alias maxime corporis dolor
            distinctio non sapiente.
          </p>
          <h4>
            Date of posting: <span>01.01.2002.</span>
          </h4>
        </div>
      </section>
    </main>
  );
}

export default Record;
