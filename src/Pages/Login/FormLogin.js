import React from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/EmailAndPassword.json";
import { curateFormValidation } from "../../utilities";
import { signInWithEmailAndPassword } from "../../Api/auth";

const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await signInWithEmailAndPassword(data);
    alert("Visualizacion de los errores!!");
    console.log(response); //No he manejado la visualizacion de los errores del backend al servidor
  };

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
          {...register(name, validation)}
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
