import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/completedForm.json";
import { curateFormValidation } from "../../utilities";
import { updateUser } from "../../database/authQueries";
import ImageCropper from "../../components/ImageCropper";

const FormProfile = ({ userValues }) => {
  const { register, handleSubmit, errors } = useForm();
  const [inputs, setInputs] = useState(userValues);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    console.log(croppedImage);
    updateUser({ ...data, image: croppedImage });
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
          value={inputs[name]}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e)}
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
        <ImageCropper
          imageUrl={inputs.imageURL}
          onImageCropped={(image) => setCroppedImage(image)}
        />
      </div>

      {renderedInput}

      <button className="fluid ui blue button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormProfile;
