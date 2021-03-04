import React from "react";
import Modal from "../../components/Modal";
import history from "../../history";
import { useForm } from "react-hook-form";
import { Message } from "../../components/Form/Message";
import { emailLogin } from "../../Api/auth";

const EmailModal = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    await emailLogin(data);
  };

  return (
    <Modal title="Send Email to Link" onDismiss={() => history.push("/login")}>
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        <div className="required field">
          <label>Email</label>
          <input
            name="email"
            type="text"
            placeholder="email"
            ref={register({
              validation: {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+.[^@ .]{2,}$/,
                  message: "Must be a valid email",
                },
              },
            })}
          />
          {errors.email && (
            <Message className="error">{errors.email.message}</Message>
          )}
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default EmailModal;
