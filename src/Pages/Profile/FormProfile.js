import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/completedForm.json";
import { curateFormValidation } from "../../utilities";
import { updateUser } from "../../database/authQueries";

const FormProfile = ({ userValues }) => {
  const { photoURL } = userValues; //debo extraer las otras propiedades
  const [userImage, setUserImage] = useState(photoURL);
  const { register, handleSubmit, errors } = useForm();

  const handleInputChange = (event) => {
    const target = event.target;
    if (target.type === "file") {
      let imageUrl = URL.createObjectURL(target.files[0]);
      setUserImage(imageUrl);
    }
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
  };

  const onSubmit = (data) => {
    console.log("Submit", data);
    updateUser(data);
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
          onChange={handleInputChange}
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
      <h1>
        La opcion de editar campos solo esta disponible SI INICIAN SESION EN
        SOCIAL
      </h1>
      <div className="field">
        <label>
          <img
            alt="User Profile"
            className="ui centered medium image"
            src={userImage}
          />
        </label>
        <input
          type="file"
          name="image"
          onChange={handleInputChange}
          ref={register({
            required: "Image is required",
          })}
        />
        {errors["image"] && (
          <Message className="error">{errors["image"].message}</Message>
        )}
      </div>

      {renderedInput}

      <button className="fluid ui blue button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormProfile;
