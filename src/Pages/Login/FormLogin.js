import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/Form/ErrorMessage";
import inputFields from "./fields.json";

const formLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(inputFields);

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <div className="required field">
        <label>Email</label>
        <input />
        {errors.email && <ErrorMessage error={errors.email.message} />}
      </div>

      <div className="required field">
        <label>Password</label>
        <input />
        {errors.password && <ErrorMessage error={errors.email.message} />}
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default formLogin;
