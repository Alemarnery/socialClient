import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/Form/ErrorMessage";
import inputFields from "./fields.json";

const FormLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderedInput = inputFields.fields.map((input) => {
    const { name, placeholder, title, type } = input;
    return (
      <div className="required field">
        <label>{title}</label>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          ref={register(input.validation)}
        />
        {console.log(errors)}
        {/* {errors.name && <ErrorMessage error={errors.name.message} />} */}
      </div>
    );
  });

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      {renderedInput}
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormLogin;
