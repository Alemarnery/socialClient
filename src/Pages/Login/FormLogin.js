import React from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/login.json";
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
        {errors[name] && (
          <Message className="error">{errors[name].message}</Message>
        )}
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
