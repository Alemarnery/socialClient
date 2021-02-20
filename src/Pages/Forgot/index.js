import React from "react";
import Form from "../../components/Form";
import FormForgot from "./FormForgot";

const Forgot = () => {
  return (
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
  );
};

export default Forgot;
