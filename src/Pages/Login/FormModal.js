import React from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/forgot.json";
import { curateFormValidation } from "../../utilities";

const FormModal = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  const renderedInput = inputFields.fields.map((input, index) => {
    const { name, placeholder, title, type } = input;
    let { validation } = input;
    validation = curateFormValidation(validation);
    return (
      <div className="required field" key={index}>
        <label>{title}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
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
      <h5>Enter your email to send you an email to SingIn</h5>
      {renderedInput}
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormModal;
