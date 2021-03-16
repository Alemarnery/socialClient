import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Card = ({ header, children }) => {
  return (
    <div className="card">
      <Header>{header} </Header>
      <div className="content">
        <div class="header">Matt Giampietro</div>
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Card;
