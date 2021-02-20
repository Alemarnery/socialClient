import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/Form/ErrorMessage";

const Forgot = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <h5>Enter your email to recovery your password</h5>

      <div className="required field">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+.[^@ .]{2,}$/,
              message: "Must be a valid email",
            },
          })}
        />
        {errors.email && <ErrorMessage error={errors.email.message} />}
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Forgot;
