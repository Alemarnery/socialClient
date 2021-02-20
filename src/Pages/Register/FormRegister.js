import React from "react";
import { useForm } from "react-hook-form";

import ErrorMessage from "../../components/Form/ErrorMessage";
import inputFields from "./fields.json";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderedInput = inputFields.fields.map((input) => {
    const { css, name, placeholder, title, type } = input;
    return (
      <div className={css}>
        <label>{title}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={register(input.validation)}
        />

        {errors[name] && <ErrorMessage error={errors[name].message} />}
      </div>
    );
  });

  return (
    <form
      className="ui equal width form error"
      onSubmit={handleSubmit(onSubmit)}
    >
      {renderedInput}
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
