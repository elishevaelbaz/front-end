import React, { useState, useEffect } from "react";
import "../App.css";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // update user id to be dynamic once logged in and clicking on another user to see their profile??
    fetch("http://localhost:3000/users/2")
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
        <h2>Username: {user.user_name}</h2>
        <h2>Age: {user.age}</h2>
        <h5>Bio: {user.description}</h5>
        <h2>Fave Books:{user.favorite_books}</h2>
        <h2>Location:{user.location}</h2>
      </div>
    </div>
  );
};

export default Profile;
