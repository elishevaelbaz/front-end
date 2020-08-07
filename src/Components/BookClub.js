import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";
import "../App.css";

const BookClub = (props) => {
  //   console.log(props);
  const [bookclub, setBookclub] = useState([]);

  let user = window.localStorage.getItem("booklub");
  const token = JSON.parse(user).userToken;

  useEffect(() => {
    fetch(`http://localhost:3000/bookclubs/${props.match.params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((bookClub) => setBookclub(bookClub));
  }, []);

  //   console.log(bookclub);
  const renderComments = () => {
    console.log(bookclub);
    return bookclub.comments.map((comment) => <Comments comment={comment} />);
  };

  return (
    <div>
      {bookclub.book && (
        <div className="individual-bookclub">
          <h1>{bookclub.name}</h1>
          <h2>
            {bookclub.book.title} by {bookclub.book.author}
          </h2>
          <img
            className="flip-card"
            style={{ alignSelf: "center" }}
            src={bookclub.book.image_url}
          />
          <br></br>
          <h1>Comments</h1>
          {renderComments()}
          <AddComment />
        </div>
      )}
    </div>
  );
};

export default BookClub;
