import React from "react";

const FormButton = (props) => {
  const { children } = props;
  return <div className="extra content">{children}</div>;
};

export default FormButton;
