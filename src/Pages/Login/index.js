import React from "react";
import Form from "../../components/Form";
import SocialButtons from "./SocialButtons";
import FormLogin from "./FormLogin";
import { solution } from "../../utilities/index";

const Login = () => {
  solution();
  return (
    <div className="ui middle aligned two column centered grid">
      <div className="ui card column">
        <Form
          title="Sign In"
          links={
            <>
              <a href="/register">
                <i className="user icon"></i>Don't have an account?
              </a>
              <a href="/forgot" className="right floated">
                <i className="info icon"></i>Forgot your password?
              </a>
            </>
          }
        >
          <SocialButtons />
          <FormLogin />
        </Form>
      </div>
    </div>
  );
};

export default Login;
