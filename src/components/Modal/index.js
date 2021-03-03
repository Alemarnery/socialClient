import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

const Modal = ({ title, links, onDismiss, children }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <Header>{title}</Header>
        <div className="content">{children}</div>
        <Footer>{links}</Footer>
      </div>
    </div>,
    document.querySelector("#root")
  );
};

export default Modal;
