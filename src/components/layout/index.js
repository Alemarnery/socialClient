import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <div className="ui grid">
      <Menu />
      <h1 className="ui header">{title}</h1>
      <div className="row">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
