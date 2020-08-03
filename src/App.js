import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import BooksContainer from "./Components/BooksContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      My BooKlub App
      <BooksContainer />
    </div>
  );
}

export default App;
