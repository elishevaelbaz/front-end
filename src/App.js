import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import BooksContainer from "./Components/BooksContainer";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      {/* <Profile /> */}
      {/* <BooksContainer /> */}
      {/* <Login /> */}
      {<Signup />}
    </div>
  );
}

export default App;
