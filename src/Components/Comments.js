import React from "react";
import Profile from "./Profile";
import { Route, NavLink } from "react-router-dom";

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

  // const handleViewUserProfile = () => {
  //   // <Profile user_id={props.comment.user_id} />;
  //   console.log("clicked");
  //   return (
  //     <NavLink
  //       exact
  //       path="/profile"
  //       render={() => <Profile {...props.comment.user_id} />}
  //     />
  //   );
  // };

  return (
    <div>
      <h4 style={{ display: "inline" }}>
        <NavLink
          to={{
            pathname: "/profile",
            aboutProps: { user_id: props.comment.user_id },
          }}
        >
          <span
            // onClick={handleViewUserProfile}
            style={{ color: "#9c765d", fontWeight: "bold" }}
          >
            {props.comment.user_name}
          </span>
        </NavLink>
        : {props.comment.content}
      </h4>
      {/* how can i make the buttons next to the username and content */}
      {props.comment.user_id === user_id && (
        <>
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
              display: "inline",
              backgroundColor: "red",
              backgroundImage: "linear-gradient(315deg, pink 0%, red 74%)",
              marginLeft: "15px",
            }}
          >
            Delete 🗑️
          </button>
        </>
      )}
    </div>
  );
};

export default Comments;
