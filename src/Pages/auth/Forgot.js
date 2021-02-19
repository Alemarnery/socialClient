import React from "react";
import Form from "../../components/Form";

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
      <form className="ui form error" method="POST" action="forgot">
        <h5>Enter your email to recovery your password</h5>

        <div className="required field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default Forgot;
