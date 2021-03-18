import React from "react";

const Menu = () => {
  return (
    <div class="row">
      <div class="twelve wide column">
        <div className="ui menu">
          <p className="active item">Home</p>
          <p className="item">Messages</p>
          <p className="item">Friends</p>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
            <p className="ui item">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
