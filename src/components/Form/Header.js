import React from "react";

const Header = (props) => {
  return (
    <div className="content">
      <div className="header">{props.children}</div>
    </div>
  );
};

export default Header;
