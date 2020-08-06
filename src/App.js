import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import BooksContainer from "./Components/BooksContainer";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import BookClubsList from "./Components/BookClubsList";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("booklub")
  );

  // console.log("render", loggedIn);

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <br></br>
      <Switch>
        {loggedIn ? (
          <>
            <Route
              exact
              path="/home"
              render={() => (
                <Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
              )}
            />
            <Route exact path="/books" component={BooksContainer} />
            <Route exact path="/booklubs" component={BookClubsList} />
            <Route exact path="/profile" component={Profile} />
          </>
        ) : (
          <>
            <Route
              exact
              path="/home"
              render={() => (
                <Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => <Login setLoggedIn={setLoggedIn} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup setLoggedIn={setLoggedIn} />}
            />
          </>
        )}
      </Switch>

      {/* <Profile /> */}
      {/* <BooksContainer /> */}
      {/* <Login setLoggedIn={setLoggedIn} /> */}
      {/* <Signup setLoggedIn={setLoggedIn} /> */}
    </div>
  );
}

export default App;
