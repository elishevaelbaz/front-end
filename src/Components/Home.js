import React from "react";
import "./leaningimages.sass";
import "../App.css";

const Home = (props) => {
  return (
    <div>
      <div className="images-leaning">
        <div>
          <img
            src="https://prodimage.images-bn.com/pimages/9781250090133_p0_v2_s1200x630.jpg"
            alt="book cover image for 'do no harm'"
          />
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/717KRq4xxxL.jpg"
            alt="book cover image for 'when breath becomes air'"
          />
        </div>
        <div>
          <img
            src="https://prodimage.images-bn.com/pimages/9780374533403_p0_v2_s550x406.jpg"
            alt="book cover image for 'the spirit catches you and you fall down'"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/41j6Gz-xuWL.jpg"
            alt="book cover image for 'the daily stoic'"
          />
        </div>
      </div>
      <div>
        {props.loggedIn ? <h1>logged in home</h1> : <h1>logged out home</h1>}
      </div>
    </div>
  );
};

export default Home;
