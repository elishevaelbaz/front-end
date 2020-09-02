import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import AddComment from './AddComment';
import '../App.css';
import cable from '../cable';

const BookClub = (props) => {
  //   console.log(props);
  const [bookclub, setBookclub] = useState({});

  let user = window.localStorage.getItem('booklub');
  const token = JSON.parse(user).userToken;

  useEffect(() => {
    fetch(`http://localhost:3000/bookclubs/${props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        Accept: 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((bookClub) => setBookclub(bookClub));
  }, []);

  useEffect(() => {
    const params = {
      channel: 'CommentChannel',
      id: props.match.params.id,
    };

    const handlers = {
      received: (newComment) => {
        setBookclub((prevState) => {
          // console.log(prevState);
          return {
            ...prevState,
            comments: [...prevState.comments, newComment],
          };
        });
      },
      connected: () => console.log('connected'),
      disconnected: () => console.log('disconnected'),
    };

    cable.subscriptions.create(params, handlers);
  }, [props.match.params.id]);

  // console.log(bookclub);
  const renderComments = () => {
    return bookclub.comments.map((comment) => (
      <Comments comment={comment} setBookclub={setBookclub} />
    ));
  };

  return (
    <div style={{ display: 'flex' }}>
      {bookclub && bookclub.book && (
        <div className="individual-bookclub">
          {/* <div className="book-club-list"> */}
          {/* <div className="book-details"> */}
          <div className="book-details book-club-list">
            <h1>{bookclub.name}</h1>
            <h4>
              {bookclub.book.title} by {bookclub.book.author}
            </h4>
            <img className="booklub-image" src={bookclub.book.image_url} />
          </div>
          {/* <br></br> */}
          {/* <div className="book-comments"> */}
          <div className="book-comments book-club-list">
            <h3>Comments</h3>
            {renderComments()}
            <AddComment
              bookclub_id={props.match.params.id}
              setBookclub={setBookclub}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookClub;
