import React from "react";

const Header = ({ children }) => {
  return (
    <div className="content">
      <div className="header">{children}</div>
    </div>
  );
};

export default Header;
