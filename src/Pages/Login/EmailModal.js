import React, { useState } from "react";
import Modal from "../../components/Modal";
import history from "../../history";
import { Message } from "../../components/Form/Message";
import { emailLogin } from "../../Api/auth";
import FormModal from "./FormModal";

const EmailModal = () => {
  const [submitForm, setSubmitForm] = useState(false);

  const onSubmit = async (data) => {
    setSubmitForm(true);
    await emailLogin(data);
    setTimeout(function () {
      history.push("/login");
    }, 4000);
  };

  return (
    <Modal title="Send Email to Link" onDismiss={() => history.push("/login")}>
      {submitForm && (
        <Message className="positive">
          You should soon receive an email allowing you to signIn. Please make
          sure to check your spam and trash if you can’t find the email
        </Message>
      )}

      <FormModal onSubmit={onSubmit} />
    </Modal>
  );
};

export default EmailModal;
