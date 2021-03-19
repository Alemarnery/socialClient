import React from "react";
import { signOut } from "../../Api/auth";

const Menu = () => {
  return (
    <div className="sixteen wide column">
      <div className="ui inverted menu">
        <a className="item active" href="/login">
          Home
        </a>
        <a className="item active" href="/login">
          Messages
        </a>
        <a className="item" href="/login">
          Friends
        </a>
        <div className="item">
          <a className="ui blue button" onClick={signOut}>
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
