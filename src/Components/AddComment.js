import React, { useState, useEffect } from "react";

const AddComment = (props) => {
  // add an animation to when the comment gets added

  const [comment, setComment] = useState({});

  const changeHandler = (e) => {
    e.persist();
    setComment((prevState) => ({
      ...prevState,
      content: e.target.value,
    }));
  };

  const handleCommentCreation = (e) => {
    e.preventDefault();

    let user = window.localStorage.getItem("booklub");
    const token = JSON.parse(user).userToken;

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      body: JSON.stringify({ ...comment, bookclub_id: props.bookclub_id }),
    })
      .then((resp) => resp.json())
      .then((newComment) => {
        // console.log(newComment);
        props.setBookclub((prevState) => {
          console.log(prevState);
          return {
            ...prevState,
            comments: [...prevState.comments, newComment],
          };
        });
        setComment({ content: "" });
      });
  };

  return (
    <form className="add-comment" onSubmit={handleCommentCreation}>
      <label></label>
      <input
        className="account"
        name="comment"
        type="text"
        placeholder="share your thoughts"
        autoComplete="off"
        value={comment.content}
        onChange={changeHandler}
      />
      <br></br>
      <button type="submit" className="custom-btn login-submit-button">
        <span>Add Comment</span>
      </button>
    </form>
  );
};

export default AddComment;
