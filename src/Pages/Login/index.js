import React from "react";
import Form from "../../components/Form";
import SocialButtons from "./SocialButtons";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <Form
      fields={loginFields}
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
  );
};

export default Login;
