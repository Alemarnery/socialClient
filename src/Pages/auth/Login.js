import React from "react";
import SocialButtons from "../../components/SocialButtons";
import Form from "../../components/Form";

const Login = () => {
  return (
    <Form
      title="Sign In"
      links={
        <>
          <a href="/register">
            <i class="user icon"></i>Don't have an account?
          </a>
          <a href="/forgot" class="right floated">
            <i class="info icon"></i>Forgot your password?
          </a>
        </>
      }
    >
      <SocialButtons />
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
    </Form>
  );
};

export default Login;
