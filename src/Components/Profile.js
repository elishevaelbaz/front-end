import React, { useState, useEffect } from "react";
import "../App.css";
import EditProfile from "./EditProfile";

const Profile = (props) => {
  const [user, setUser] = useState([]);

  const [clickedEdit, setClickedEdit] = useState(false);

  let userToken = window.localStorage.getItem("booklub");
  const token = JSON.parse(userToken).userToken;
  const user_id = props.location.aboutProps
    ? props.location.aboutProps.user_id
    : JSON.parse(userToken).user_id;

  useEffect(() => {
    // update user id to be dynamic once logged in and clicking on another user to see their profile??
    fetch(`http://localhost:3000/users/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((user) => setUser(user));
  }, []);

  const renderEditProfile = () => {
    // change the state so that clicked edit is true
    setClickedEdit(true);
  };

  return (
    <div className="profile-div">
      <div className="profile-image">
        <img src={user.image_url} />
      </div>
      {clickedEdit ? (
        <EditProfile
          setClickedEdit={setClickedEdit}
          user={user}
          setUser={setUser}
        />
      ) : (
        <div className="user-info">
          <h1>{user.name}</h1>
          <div style={{ textAlign: "left" }}>
            <h2>
              <span>Username:</span> {user.username}
            </h2>
            <h3>
              <span>Bio:</span> {user.description}
            </h3>
            <h2>
              <span>Fave Books: </span>
              {user.favorite_books}
            </h2>
            <h2>
              <span>Location:</span> {user.location}
            </h2>
            <h2>
              <span>Age:</span> {user.age}
            </h2>
          </div>
          <br />
          {user_id === JSON.parse(userToken).user_id && (
            <button
              onClick={renderEditProfile}
              className="custom-btn login-submit-button"
            >
              Edit Profile
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
