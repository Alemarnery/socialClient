import React from "react";

const Menu = () => {
  return (
    <div className="sixteen wide column">
      <div className="ui inverted menu">
        <a className="item active">Home</a>
        <a className="item active">Messages</a>
        <a className="item">Friends</a>
        <div className="item">
          <div className="ui blue button">Sign Out</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
