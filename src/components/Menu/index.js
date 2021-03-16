import React from "react";

const Menu = () => {
  return (
    <div className="ui menu">
      <a className="active item">Home</a>
      <a className="item">Messages</a>
      <a className="item">Friends</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};

export default Menu;
