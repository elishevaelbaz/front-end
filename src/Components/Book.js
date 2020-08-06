import React from "react";
import "../App.css";

const Book = (props) => {
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
          <button className="custom-btn login-submit-button">
            Join Bookclub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
