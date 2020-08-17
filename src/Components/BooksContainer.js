import React, { useState, useEffect } from "react";
import Book from "./Book";
import SearchBooks from "./SearchBooks";
import BookPagination from "./BookPagination";
import "./Paginate.css";
import "../App.css";

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

  console.log(books);

  const renderBooks = () => {
    return books.map((book) => <Book book={book} />);
  };

  return (
    <div className="books-container">
      <SearchBooks setBooks={setBooks} />
      {renderBooks()}
      <BookPagination />
    </div>
  );
};

export default BooksContainer;
