import React from "react";
import Form from "../../components/Form";

const Register = () => {
  return (
    <Form
      title="Register"
      links={
        <a href="/login">
          <i class="user icon"></i> Already have an account? Sign In
        </a>
      }
    >
      <form class="ui equal width form error" method="POST" action="register">
        <div class="fields">
          <div class="required field">
            <label>Name</label>
            <input type="text" name="name" placeholder="First Name" />
          </div>

          <div class="field">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
        </div>

        <div class="required field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>

        <div class="required field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>

        <div class="required field">
          <label>Date of Birth</label>
          <input
            type="date"
            name="birthDay"
            placeholder="Date of Birth"
            type="date"
          />
        </div>

        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default Register;
