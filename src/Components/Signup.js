import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    username: "",
    password: "",
    age: "",
    description: "",
    favorite_books: "",
    location: "",
    image_url: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();

    const newUser = {
      name: state.name,
      username: state.username,
      password: state.password,
      age: state.age,
      description: state.description,
      favorite_books: state.favorite_books,
      location: state.location,
      image_url: state.image_url,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((object) => {
        const userInfo = {
          userToken: object.token,
          name: object.user.name,
          user_id: object.user.id,
        };
        window.localStorage.setItem("booklub", JSON.stringify(userInfo));
        props.setLoggedIn(window.localStorage.getItem("booklub"));
        history.push("/home");
      });
  };

  const changeHandler = (e) => {
    e.persist();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-signup">
      <h1>Create an account</h1>
      <form onSubmit={handleSignup}>
        <label>Name</label>
        <br />
        <input
          className="account"
          name="name"
          type="text"
          autoComplete="off"
          value={state.name}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Username</label>
        <br />
        <input
          className="account"
          name="username"
          type="text"
          autoComplete="off"
          value={state.username}
          onChange={changeHandler}
        />

        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          className="account"
          name="password"
          type="password"
          autoComplete="off"
          value={state.password}
          onChange={changeHandler}
        />
        <br />
        <br />

        <label>Age</label>
        <br />
        <input
          className="account"
          name="age"
          type="text"
          autoComplete="off"
          value={state.age}
          onChange={changeHandler}
        />

        <br />
        <br />

        <label>Description</label>
        <br />
        <input
          className="account"
          name="description"
          type="text"
          autoComplete="off"
          value={state.description}
          onChange={changeHandler}
        />

        <br />
        <br />

        <label>Favorite Books</label>
        <br />
        <input
          className="account"
          name="favorite_books"
          type="text"
          autoComplete="off"
          value={state.favorite_books}
          onChange={changeHandler}
        />

        <br />
        <br />

        <label>Location</label>
        <br />
        <input
          className="account"
          name="location"
          type="text"
          autoComplete="off"
          value={state.location}
          onChange={changeHandler}
        />

        <br />
        <br />

        <label>Image</label>
        <br />
        <input
          className="account"
          name="image_url"
          type="text"
          autoComplete="off"
          value={state.image_url}
          onChange={changeHandler}
        />
        <br />
        <br />
        <button type="submit" className="custom-btn login-submit-button">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
