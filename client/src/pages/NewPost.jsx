import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header/Header";

const valuesInitialState = {
  postTitle: "",
  postContent: "",
};

function NewPost() {
  const [values, setValues] = useState(valuesInitialState);
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();

  function discard(e) {
    e.preventDefault();
    setValues(valuesInitialState);
    navigate("/");
  }
  //TODO: Create submit post

  return (
    <main>
      <Header />
      <h1>Create a new post</h1>
      <section className="mainFormat">
        <form action="" style={{ paddingTop: "5%" }}>
          <div className="postDiv">
            <label htmlFor="title">Title:</label>
            <input type="text" name="postTitle" onChange={handleChange} />
          </div>
          <div className="postDiv">
            <label htmlFor="content">Content:</label>
            <textarea
              name="postContent"
              id="postContent"
              onChange={handleChange}
              cols={30}
            ></textarea>
          </div>
          <div className="inputField post">
            <button type="submit" name="createPostButton">
              Create post
            </button>
            <Link to="/">
              <button
                onClick={discard}
                type="submit"
                name="discardPostButton"
                id="discardPost"
              >
                Discard
              </button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default NewPost;
