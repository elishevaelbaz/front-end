import React, { useState, useEffect } from "react";
import "../App.css";

const Profile = () => {
  const [user, setUser] = useState([]);

  let userToken = window.localStorage.getItem("booklub");
  const token = JSON.parse(userToken).userToken;
  const user_id = JSON.parse(userToken).user_id;

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

  return (
    <div className="profile-div">
      <div className="profile-image">
        <img src={user.image_url} />
      </div>
      <div className="user-info">
        <h1>{user.name}</h1>
        <h2>Username: {user.username}</h2>
        <h2>Age: {user.age}</h2>
        <h5>Bio: {user.description}</h5>
        <h2>Fave Books:{user.favorite_books}</h2>
        <h2>Location:{user.location}</h2>
        <button className="custom-btn login-submit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
