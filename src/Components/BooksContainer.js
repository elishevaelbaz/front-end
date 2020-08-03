import React, { useState, useEffect } from "react";
import Book from "./Book";

const BooksContainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((resp) => resp.json())
      .then((booksArray) => setBooks(booksArray));
  }, []);

  const renderBooks = () => {
    return books.map((book) => <Book book={book} />);
  };

  return <div>{renderBooks()}</div>;
};

export default BooksContainer;
