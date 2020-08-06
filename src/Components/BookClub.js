import React, { useState, useEffect } from "react";
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

  console.log(bookclub);

  return (
    <div>
      {bookclub.book && (
        <div>
          <h1>{bookclub.name}</h1>
          <h2>{bookclub.book.title}</h2>
          <img src={bookclub.book.image_url} />
          <h3>{bookclub.comments[0].content}</h3>
        </div>
      )}
    </div>
  );
};

export default BookClub;
