import React from "react";
import { useForm } from "react-hook-form";
import SocialButtons from "../../components/SocialButtons";
import Form from "../../components/Form";
import ErrorMessage from "../../components/Form/ErrorMessage";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
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
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        <div className="required field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Must be a valid email",
              },
            })}
          />
          {errors.email ? <ErrorMessage error={errors.email.message} /> : " "}
        </div>

        <div className="required field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            type="password"
            ref={register({
              required: "required",
              minLength: {
                value: 4,
                message: "Password must be between 4 and 20 caracters",
              },
              maxLength: {
                value: 20,
                message: "Password must be between 4 and 20 caracters",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default Login;
