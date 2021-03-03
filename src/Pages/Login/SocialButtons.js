import React from "react";
import { Link } from "react-router-dom";
import {
  googleLogin,
  facebookLogin,
  twitterLogin,
  signOut,
} from "../../Api/auth";

const SocialButtons = () => {
  return (
    <div className="field center aligned">
      <button className="ui negative basic button" onClick={googleLogin}>
        <i className="google  icon"></i>
        Google
      </button>

      <Link to="/emailModal" className="ui secondary basic button">
        <i className="envelope outline icon"></i>
        Email Link
      </Link>

      <button className="ui facebook button" onClick={facebookLogin}>
        <i className="facebook icon"></i>
        Facebook
      </button>

      <button className="ui twitter button" onClick={twitterLogin}>
        <i className="facebook icon"></i>
        Twitter
      </button>

      <button onClick={signOut}>signOut</button>
    </div>
  );
};

export default SocialButtons;
