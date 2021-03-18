import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="ui container grid">
      <Menu />
      <div className="row">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
