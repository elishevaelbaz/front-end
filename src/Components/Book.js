import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

const Book = (props) => {
  // when you click join bookclub, make a fetch to create to localhost:3000/bookclubs/bookid(?)
  // then you'll get back a newly created bookclub instance, or the found bookclub instance
  // next you need to create a bookclub_user instance, using that bookclub idea and your user id
  const history = useHistory();

  const joinClub = () => {
    const user = window.localStorage.getItem("booklub");
    const token = JSON.parse(user).userToken;

    fetch("http://localhost:3000/bookclubs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      body: JSON.stringify({
        book_id: props.book.id,
        name: `${props.book.title} Club`,
        title: props.book.title,
        author: props.book.author,
        image_url: props.book.image_url,
      }),
    })
      .then((resp) => resp.json())
      .then((bookclub) => history.push(`/booklubs/${bookclub.id}`));
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            // src="http://books.google.com/books/content?id=JxNvDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            src={props.book.image_url}
            alt="book"
            style={{ width: "200px", height: "310px", borderRadius: "25px" }}
          />
        </div>
        <div className="flip-card-back">
          <h2>{props.book.title}</h2>
          <h3>{props.book.author}</h3>
          <p>{props.book.description}</p>
          <button onClick={joinClub} className="custom-btn login-submit-button">
            Join Bookclub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
