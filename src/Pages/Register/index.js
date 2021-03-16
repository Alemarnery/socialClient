import React from "react";
import Form from "../../components/Form";
import FormRegister from "./FormRegister";

const Register = () => {
  return (
    <div className="ui middle aligned two column centered grid">
      <div className="ui card column">
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
      </div>
    </div>
  );
};

export default Register;
