import React, { useState, useEffect } from "react";
import BookClub from "./BookClub";
import "../App.css";
import { useHistory } from "react-router-dom";

const BookClubsList = (props) => {
  const history = useHistory();

  const [bookclubs, setBookclubs] = useState([]);

  let user = window.localStorage.getItem("booklub");
  const token = JSON.parse(user).userToken;

  useEffect(() => {
    fetch("http://localhost:3000/bookclubs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((bookclubsArray) => setBookclubs(bookclubsArray));
  }, []);

  const renderBookClub = (bookclub) => {
    props.bookClubProps(bookclub);
    // console.log(bookclub);
    history.push(`/booklubs/${bookclub.id}`);
  };

  const renderMyBookClubs = () => {
    return bookclubs.map((bookclub) => (
      <div className="book-club-list">
        <button
          onClick={() => renderBookClub(bookclub)}
          className="custom-btn login-submit-button"
          style={{
            float: "right",
            marginTop: "35px",
            marginBottom: "25px",
            marginRight: "50px",
          }}
        >
          View details
        </button>
        <h1>{bookclub.name}</h1>
        <h2>{bookclub.book.title}</h2>
        <button
          className="custom-btn login-submit-button"
          style={{
            float: "right",
            marginBottom: "30px",
            marginRight: "50px",
            backgroundColor: "red",
            backgroundImage: "linear-gradient(315deg, pink 0%, red 74%)",
          }}
        >
          Leave BookClub
        </button>
        <h3>{bookclub.book.author}</h3>
        {/* <h3>{bookclub.comments[0].content}</h3> */}
        <br></br>
      </div>
    ));
    //have a button for each bookclub where when you click it it'll take you to that bookclubs page, which will have the books details and the comments section
  };

  return <div>{renderMyBookClubs()}</div>;
};

export default BookClubsList;
