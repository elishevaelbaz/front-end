import React, { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      //   style={{ border: "dashed", borderColor: "black" }}
      className="login-signup"
    >
      <h1>Login</h1>
      <form onSubmit={null}>
        <label>Username</label>
        <br />
        <input
          className="account"
          name="username"
          type="text"
          autoComplete="off"
          value={username}
          onChange={null}
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
          value={password}
          onChange={null}
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
