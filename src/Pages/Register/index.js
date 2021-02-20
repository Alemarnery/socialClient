import React from "react";
import Form from "../../components/Form";
import FormRegister from "./FormRegister";

const Register = () => {
  return (
    <Form
      title="Register"
      links={
        <a href="/login">
          <i className="user icon"></i> Already have an account? Sign In
        </a>
      }
    >
      <FormRegister />
    </Form>
  );
};

export default Register;
