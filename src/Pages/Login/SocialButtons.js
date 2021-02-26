import React from "react";
import {
  googleLogin,
  facebookLogin,
  twitterLogin,
  emailLogin,
  signOut,
} from "../../Api/auth";

const SocialButtons = () => {
  return (
    <div className="field center aligned">
      <button className="ui negative basic button" onClick={googleLogin}>
        <i className="google  icon"></i>
        Google
      </button>

      <button className="ui secondary basic button" onClick={emailLogin}>
        <i className="envelope outline icon"></i>
        Email Link
      </button>

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
