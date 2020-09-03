import React, { useState } from 'react';
import '../App.css';

const EditProfile = (props) => {
  // remember to remove the states which you dont end up using
  const [state, setState] = useState({
    name: props.user.name,
    username: props.user.username,
    // password: "",
    age: props.user.age,
    description: props.user.description,
    favorite_books: props.user.favorite_books,
    location: props.user.location,
    // image_url: "",
  });

  const changeHandler = (e) => {
    e.persist();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let userToken = window.localStorage.getItem('booklub');
  const token = JSON.parse(userToken).userToken;

  const handleSaveChanges = () => {
    // make a fetch patch to edit the user
    fetch(`http://localhost:3000/users/${props.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        Accept: 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((resp) => resp.json())
      .then((user) => props.setUser(user));

    //with the returned user change the user state

    // change the seteditclicked to false
    props.setClickedEdit(false);
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSaveChanges}>
        <label>Name</label>
        <br />
        <input
          className="account"
          name="name"
          type="text"
          autoComplete="off"
          value={state.name}
          onChange={changeHandler}
        />
        <br />
        <label>Username</label>
        <br />
        <input
          className="account"
          name="username"
          type="text"
          autoComplete="off"
          value={state.username}
          onChange={changeHandler}
        />

        <br />

        <label>Age</label>
        <br />
        <input
          className="account"
          name="age"
          type="text"
          autoComplete="off"
          value={state.age}
          onChange={changeHandler}
        />

        <br />

        <label>Bio</label>
        <br />
        <input
          className="account"
          name="description"
          type="text"
          autoComplete="off"
          value={state.description}
          onChange={changeHandler}
        />

        <br />

        <label>Favorite Books</label>
        <br />
        <input
          className="account"
          name="favorite_books"
          type="text"
          autoComplete="off"
          value={state.favorite_books}
          onChange={changeHandler}
        />

        <br />

        <label>Location</label>
        <br />
        <input
          className="account"
          name="location"
          type="text"
          autoComplete="off"
          value={state.location}
          onChange={changeHandler}
        />

        <br />
        <button type="submit" className="custom-btn login-submit-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
