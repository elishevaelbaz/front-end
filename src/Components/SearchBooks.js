import React, { useState, useEffect } from "react";

const SearchBooks = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [books, setBooks] = useState({ items: [] });

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //   useEffect(() => {
  //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
  //       .then((resp) => resp.json())
  //       .then(console.log);
  //   }, [searchTerm]);

  const fetchBooks = (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((resp) => resp.json())
      .then((obj) => {
        const booksArray = [];
        obj.items.forEach((item) => {
          booksArray.push({
            author: item.volumeInfo.authors[0],
            description: item.volumeInfo.description,
            image_url: item.volumeInfo.imageLinks.thumbnail,
            title: item.volumeInfo.title,
            id: parseInt(item.volumeInfo.industryIdentifiers[0].identifier),
          });
        });
        props.setBooks(booksArray);
      });
    // const booksArray = obj.items.map(item => item.volumeInfo.authors[0], item.volumeInfo.title, item.volumeInfo.imageLinks.thumbnail (imageURL), item.volumeInfo.description)
  };

  return (
    <div>
      <form onSubmit={fetchBooks}>
        {/* <label> */}
        <div>
          <label>
            <h1>Search for books</h1>
          </label>
          <input
            type="search"
            placeholder="Harry Potter"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </div>
        {/* </label> */}
      </form>
    </div>
  );
};

export default SearchBooks;
