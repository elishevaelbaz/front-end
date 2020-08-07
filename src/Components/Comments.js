import React from "react";

const Comments = (props) => {
  return (
    <div>
      {/* how can i get the user of the content to be displayed, i added a user to the comment serializer, but to no avail */}
      {/* {console.log(props)} */}
      <h1>{props.comment.content}</h1>
    </div>
  );
};

export default Comments;
