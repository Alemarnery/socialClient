import React from "react";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import { curateFormValidation } from "../../utilities";

const FormProfile = ({ user }) => {
  const { register, handleSubmit, errors } = useForm();

  const handleChange = () => {
    console.log("change");
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const { displayName, email, photoURL } = user;

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>
          <img className="ui centered medium circular image" src={photoURL} />
        </label>
        <input type="file" />
      </div>

      <div className="required field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={displayName}
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>Last Name</label>
        <input type="text" name="lastName" placeholder="Last Name" />
      </div>

      <div className="required field">
        <label>Email</label>
        <input type="text" name="email" value={email} disabled />
      </div>

      <div className="required field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
      </div>

      <div className="required field">
        <label>Date of Birth</label>
        <input
          type="date"
          name="birthDay"
          placeholder="Date of Birth"
          type="date"
          onChange={handleChange}
        />
      </div>

      <button className="fluid ui blue button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormProfile;
