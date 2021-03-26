import React from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/register.json";
import { curateFormValidation } from "../../utilities";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderedInput = inputFields.fields.map((input, index) => {
    const { css, name, placeholder, title, type } = input;
    let { validation } = input;
    validation = curateFormValidation(validation);
    console.log(validation);

    return (
      <div className={css} key={index}>
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
