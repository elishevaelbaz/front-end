import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((resp) => resp.json())
      .then((object) => {
        console.log(object);
        if (object.error) {
          setState({
            username: "",
            password: "",
          });
          setError(object.error);
        } else {
          const userInfo = {
            userToken: object.token,
            name: object.user.name,
            user_id: object.user.id,
          };
          window.localStorage.setItem("booklub", JSON.stringify(userInfo));
          props.setLoggedIn(window.localStorage.getItem("booklub"));
          history.push("/home");
        }
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
    <div
      //   style={{ border: "dashed", borderColor: "black" }}
      className="login-signup"
    >
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="custom-btn login-submit-button">
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
