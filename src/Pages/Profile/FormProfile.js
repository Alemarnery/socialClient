import React from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/completedForm.json";
import { curateFormValidation } from "../../utilities";
import { updateUser } from "../../database/authQueries";

const FormProfile = ({ userValues }) => {
  //A los inputs del formulario Profile les falta el value de la base de datos
  //los nombres de los inputs de la db, no son iguales a los del form de Registro
  //(PORQUE REGISTRE/LOGIN CON GOOGLE) 
  const { photoURL } = userValues;

  const { register, handleSubmit, errors } = useForm();

  //Este metodo no hace gran cosa
  const handleInputChange = (event) => {
    const target = event.target;
    //Value and name del input
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
  };

  const onSubmit = (data) => {
    console.log('Submit',data);
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
      <div className="field">
        <label>
          <img className="ui centered medium circular image" src={photoURL} />
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
