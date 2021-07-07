import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import inputFields from "../../components/Fields/completedForm.json";
import { curateFormValidation } from "../../utilities";
import { updateUser } from "../../database/authQueries";
import ImageCropper from "../../components/ImageCropper";

const FormProfile = ({ userValues }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const { isDirty } = useFormState({
    control,
  });
  const [croppedImage, setCroppedImage] = useState(null);

  const onSubmit = (data) => {
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
          defaultValue={userValues[name]}
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
      <div className="field">
        <ImageCropper
          imageUrl={userValues.imageURL}
          onImageChange={() => setCroppedImage(null)}
          onImageCropped={(image) => setCroppedImage(image)}
          {...register("imageInput")}
        />
      </div>

      {renderedInput}

      <button
        // TODO:
        // We have to set the condition with isDirty and croppedImage
        disabled={false}
        className="fluid ui blue button"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormProfile;
