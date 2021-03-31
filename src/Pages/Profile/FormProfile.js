import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/completedForm.json";
import { curateFormValidation } from "../../utilities";

const FormProfile = ({ user }) => {
  const { photoURL } = user;

  const [name, setName] = useState(user.displayName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  console.log(user.lastName);
  console.log(user.email);

  console.log(name);
  console.log(lastName);
  console.log(email);

  const { register, handleSubmit, errors } = useForm();

  const handleChange = () => {
    console.log("change");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderedInput = inputFields.fields.map((input, index) => {
    const { css, title, type, name, placeholder } = input;
    let { validation } = input;
    validation = curateFormValidation(validation);
    return (
      <div className={css} key={index}>
        <label>{title}</label>
        <input
          name={name}
          value="Hola"
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

  console.log(errors);

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>
          <img className="ui centered medium circular image" src={photoURL} />
        </label>
        <input type="file" />
      </div>
      {renderedInput}

      <button className="fluid ui blue button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormProfile;
