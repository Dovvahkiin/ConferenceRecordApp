import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
  //TODO: Map records and make each post field with max characters or read more...
  //?: Make max records per page and add more pages to select

  return (
    <div>
      <Header />
      <h1>Hello, YourName</h1>
      <main className="mainFormat">
        <article className="post">
          <h2>Post 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            eligendi quasi eveniet quam assumenda non, officia reiciendis atque
            quod temporibus quas optio ullam nisi doloremque ipsum ut nesciunt,
            rem voluptatum.
          </p>
          <span>Previews: 0</span>
          <hr className="greenLine" />
        </article>

        <article className="post">
          <h2>Post 2</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            laboriosam adipisci maiores molestiae necessitatibus modi deserunt
            quaerat sint recusandae non, repudiandae nihil mollitia doloribus
            deleniti inventore iusto praesentium expedita quasi.
          </p>
          <span>Previews: 0</span>
          <hr className="greenLine" />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
