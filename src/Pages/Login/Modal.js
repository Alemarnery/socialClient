import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        {/* Header */}
        <div className="header">Send Email Link</div>
        <div className="content">
          {/* Body */}

          <form className="ui form">
            <div className="field">
              <label>Email</label>
              <input type="text" />
            </div>

            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* footer */}

        <div class="actions">
          <div class="ui green button">Submit</div>
          <div class="ui red button">Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector("#root")
  );
};

export default Modal;
