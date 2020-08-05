import React, { useState, useEffect } from "react";
import Book from "./Book";

const BooksContainer = () => {
  const [books, setBooks] = useState([]);

  let user = window.localStorage.getItem("booklub");
  const token = JSON.parse(user).userToken;

  useEffect(() => {
    fetch("http://localhost:3000/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((booksArray) => setBooks(booksArray));
  }, []);

  const renderBooks = () => {
    return books.map((book) => <Book book={book} />);
  };

  return <div>{renderBooks()}</div>;
};

export default BooksContainer;
