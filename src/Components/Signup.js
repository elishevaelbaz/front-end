import React, { useState, useEffect } from "react";

const Signup = () => {
  return (
    <div
      style={{ border: "dashed", borderColor: "black" }}
      className="login-signup"
    >
      <h1>Create an account</h1>
      <form onSubmit={null}>
        <label>Username</label>
        <br />
        <input
          className="account"
          name="username"
          type="text"
          autoComplete="off"
          value={null}
          onChange={null}
        />
        <br />
        <br />

        <label>Name</label>
        <br />
        <input
          className="account"
          name="name"
          type="text"
          autoComplete="off"
          value={null}
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
          value={null}
          onChange={null}
        />
        <br />
        <br />

        <label>Confirm Password</label>
        <br />
        <input
          className="account"
          name="password_confirmation"
          type="password"
          autoComplete="off"
          value={null}
          onChange={null}
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
