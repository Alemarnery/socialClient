import React, { useState, useEffect } from "react";
import { authUser } from "../../database/authQueries";

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const userResponse = await authUser();
      if (userResponse !== user) {
        setUser(userResponse);
      }
    }
    fetchData();
  }, []);

  if (!user) {
    return <div>Profile</div>;
  }

  const { displayName, email, photoURL } = user;
  return (
    //Utilizar el componente FORM
    //Crear COMPONENTE CARD

    <div className="ui special cards">
      <div className="card">
        <div className="blurring dimmable image">
          <img src={photoURL} />
        </div>
        <div className="content">
          <form
            className="ui equal width form error"
            method="POST"
            action="register"
          >
            <div className="fields">
              <div className="required field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={displayName}
                  placeholder="First Name"
                />
              </div>

              <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div className="required field">
              <label>Email</label>
              <input type="text" name="email" value={email} disabled />
            </div>

            <div className="required field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="required field">
              <label>Date of Birth</label>
              <input
                type="date"
                name="birthDay"
                placeholder="Date of Birth"
                type="date"
              />
            </div>

            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="extra content"></div>
      </div>
    </div>
  );
};

export default Profile;
