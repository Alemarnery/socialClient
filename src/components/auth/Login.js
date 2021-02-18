import React from "react";
import Header from "./Header";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <React.Fragment>
      <Header title="Sign In" />

      <div className="content">
        <SocialLogin />
        <form className="ui form error" method="POST" action="login">
          <div className="required field">
            <label>Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>

          <div className="required field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              type="password"
            />
          </div>

          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="extra content">BUTTONS de LOGIN</div>
    </React.Fragment>
  );
};

export default Login;
