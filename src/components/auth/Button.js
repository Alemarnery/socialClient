import React from "react";

const Button = (props) => {
  console.log(props.button);
  return <div className="extra content">{props.button} </div>;
};

export default Button;
