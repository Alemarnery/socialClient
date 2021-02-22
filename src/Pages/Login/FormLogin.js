import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/Form/ErrorMessage";
import inputFields from "./fields.json";
import { curateFormValidation } from "../../utilities";

const FormLogin = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderedInput = inputFields.fields.map((input, index) => {
    const { name, placeholder, title, type } = input;
    let { validation } = input;

    validation = curateFormValidation(validation);

    return (
      <div className="required field" key={index}>
        <label>{title}</label>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          ref={register(validation)}
        />
        {errors[name] && <ErrorMessage error={errors[name].message} />}
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
