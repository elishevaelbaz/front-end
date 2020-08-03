import React from "react";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/home" exact>
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/books" exact>
        <h2>Books</h2>
      </NavLink>
      <NavLink to="/booklubs">
        <h2>My Clubs</h2>
      </NavLink>
      <div style={{ marginLeft: "90%" }}>
        <NavLink to="/myprofile">
          <h2>Profile</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
