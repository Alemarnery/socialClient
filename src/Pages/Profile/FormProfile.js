import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/completedForm.json";
import { curateFormValidation } from "../../utilities";

const FormProfile = ({ userValues }) => {
  const { photoURL } = userValues;

  const [photo, setPhoto] = useState(photoURL);
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [birthDay, setBirthDay] = useState();

  const { register, handleSubmit, errors } = useForm();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "birthDay":
        setBirthDay(value);
    }

    console.log(name, value);
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
          placeholder={placeholder}
          type={type}
          onChange={handleInputChange}
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
      <div className="field">
        <label>
          <img className="ui centered medium circular image" src={photo} />
        </label>
        <input type="file" onChange={(e) => setPhoto(e.target.value)} />
      </div>
      {renderedInput}
      <button className="fluid ui blue button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormProfile;
