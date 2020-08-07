import React from "react";

const AddComment = () => {
  const changeHandler = (e) => {
    // e.persist();
    // setState((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
  };

  return (
    <form className="add-comment" onSubmit={null}>
      <label></label>
      <input
        className="account"
        name="comment"
        type="text"
        placeholder="share your thoughts"
        autoComplete="off"
        value={null}
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
