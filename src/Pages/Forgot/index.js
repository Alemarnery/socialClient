import React from "react";
import Form from "../../components/Form";
import FormForgot from "./FormForgot";

const Forgot = () => {
  return (
    <div className="ui middle aligned two column centered grid">
      <div className="ui card column">
        <Form
          title="Recovery your password"
          links={
            <a href="/login">
              <i className="user icon"></i>Already have an account? Sign In
            </a>
          }
        >
          <FormForgot />
        </Form>
      </div>
    </div>
  );
};

export default Forgot;
