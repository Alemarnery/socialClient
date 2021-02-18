import React from "react";

const Header = (props) => {
  return (
    <div className="content">
      <div className="header">{props.title}</div>
    </div>
  );
};

export default Header;
