import React, { useState, useEffect } from "react";

const SearchBooks = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchBooks = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((resp) => resp.json())
      .then((obj) => {
        const booksArray = [];

        if (!obj.error) {
          obj.items.forEach((item) => {
            if (
              item.volumeInfo.imageLinks &&
              item.volumeInfo.industryIdentifiers
            ) {
              booksArray.push({
                author: item.volumeInfo.authors
                  ? item.volumeInfo.authors[0]
                  : item.volumeInfo.publisher,
                description: item.volumeInfo.description,
                image_url: item.volumeInfo.imageLinks.thumbnail,
                title: item.volumeInfo.title,
                id: parseInt(item.volumeInfo.industryIdentifiers[0].identifier),
              });
            }
          });
          props.setBooks(booksArray);
        } else {
          alert("Missing search query. Please try again.");
        }
      });
  };

  return (
    <div>
      <form onSubmit={fetchBooks}>
        <div>
          <label>
            <h1 style={{ marginLeft: "20px" }}>Search for books</h1>
          </label>
          <input
            style={{
              height: "39px",
              width: "90%",
            }}
            type="search"
            placeholder="Harry Potter"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button
            style={{ marginLeft: "100px" }}
            className="custom-btn login-submit-button"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBooks;
