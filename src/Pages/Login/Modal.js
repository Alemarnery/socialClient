import React from "react";
import Modal from "../../components/Modal";
import history from "../../history";

const emailModal = () => {
  return (
    <Modal title="Send Email to Link" onDismiss={() => history.push("/login")}>
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <input type="text" />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default emailModal;
