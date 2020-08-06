import React from "react";
import "./leaningimages.sass";
import "../App.css";

const Home = (props) => {
  const handleRegister = () => {};

  const handleLogin = () => {};

  return (
    <div>
      <div className="images-leaning">
        <div>
          <img
            src="https://prodimage.images-bn.com/pimages/9781250090133_p0_v2_s1200x630.jpg"
            alt="book cover for 'do no harm'"
          />
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/717KRq4xxxL.jpg"
            alt="book cover for 'when breath becomes air'"
          />
        </div>
        <div>
          <img
            src="https://prodimage.images-bn.com/pimages/9780374533403_p0_v2_s550x406.jpg"
            alt="book cover for 'the spirit catches you and you fall down'"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/41j6Gz-xuWL.jpg"
            alt="book cover for 'the daily stoic'"
          />
        </div>
      </div>
      <div>
        {props.loggedIn ? (
          <h1 className="home-logged-in">
            Welcome back {JSON.parse(props.loggedIn).name.split(" ")[0]}!
          </h1>
        ) : (
          // <h1 className="home-logged-in">Recently Joined</h1>
          // should i fetch again here (probably not) or should i move state for bookclubs up into the app so that i can pass it into here as well
          // or should i change the home page to feature something else
          <>
            <h1 className="home-not-logged-in">Join the community!</h1>
            <div className="register-login-home-buttons">
              <button
                className="custom-btn register-login-home"
                style={{ backgroundColor: "#B33B44" }}
              >
                Register
              </button>
              <button
                className="custom-btn register-login-home"
                style={{ backgroundColor: "#E3BCBC" }}
              >
                Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
