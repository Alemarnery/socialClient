import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Form = ({ title, links, children }) => {
  return (
    <>
      <Header>{title}</Header>

      <div className="content">{children}</div>

      <Footer>{links}</Footer>
    </>
  );
};

export default Form;
