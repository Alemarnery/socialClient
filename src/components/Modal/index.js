import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">EMAIL</div>
        <div className="content">
          <div className="description">
            <p>Are you sure you want to delete this the task with title:</p>
          </div>
        </div>
        <div className="actions">
          <button className="ui button negative">Delete</button>
        </div>
      </div>
    </div>,
    document.querySelector("#root")
  );
};

export default Modal;
