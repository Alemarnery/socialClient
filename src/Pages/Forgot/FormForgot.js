import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/forgot.json";
import { curateFormValidation } from "../../utilities";
import { sendEmailResetPassword } from "../../Api/auth";

const Forgot = () => {
  const [submitForm, setSubmitForm] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setSubmitForm(true);
    const { email } = data;
    sendEmailResetPassword(email);
  };

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
    <>
      {submitForm && (
        <Message className="positive">
          You should soon receive an email allowing you to reset your password.
          Please make sure to check your spam and trash if you can’t find the
          email
        </Message>
      )}
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        <h5>Enter your email to recovery your password</h5>
        {renderedInput}
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forgot;
