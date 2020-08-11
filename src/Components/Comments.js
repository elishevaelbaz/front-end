import React from "react";

const Comments = (props) => {
  const user = window.localStorage.getItem("booklub");
  const token = JSON.parse(user).userToken;
  const user_id = JSON.parse(user).user_id;

  const deleteComment = () => {
    fetch(`http://localhost:3000/comments/${props.comment.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((deletedComment) => {
        props.setBookclub((prevState) => {
          // console.log(deletedComment);
          // console.log(prevState);
          const updatedComments = prevState.comments.filter(
            (comm) => comm.id != props.comment.id
          );
          return {
            ...prevState,
            comments: updatedComments,
          };
        });
      });
  };

  return (
    <div>
      {/* {console.log(props)} */}
      <h4>
        {props.comment.user_name}: {props.comment.content}
      </h4>
      {/* how can i make the buttons next to the username and content */}
      {props.comment.user_id === user_id && (
        <div>
          {/* MAKE EDITING A COMMENT STRETCH */}
          {/* <button
            className="custom-btn login-submit-button"
            style={{
              // float: "right",
              // marginBottom: "30px",
              marginRight: "20px",
              backgroundColor: "red",
              backgroundImage: "linear-gradient(315deg, pink 0%, pink 64%)",
            }}
          >
            Edit
          </button> */}
          <button
            onClick={deleteComment}
            className="custom-btn login-submit-button"
            style={{
              // float: "right",
              backgroundColor: "red",
              backgroundImage: "linear-gradient(315deg, pink 0%, red 74%)",
            }}
          >
            Delete 🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
