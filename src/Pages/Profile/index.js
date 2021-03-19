import React, { useState, useEffect } from "react";
import { authUser } from "../../database/authQueries";
import Layout from "../../components/layout";
import Form from "../../components/Form";

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

  const handleChange = () => {
    console.log("change");
  };

  if (!user) {
    return <div>Profile</div>;
  }

  const { displayName, email, photoURL } = user;
  return (
    <Layout title="Profile">
      <div className="ui eight wide card column centered">
        <Form>
          <form className="ui form error" method="POST" action="register">
            <div className="field">
              <img className="ui centered medium image" src={photoURL} />
            </div>

            <div className="required field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={displayName}
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Last Name" />
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
                onChange={handleChange}
              />
            </div>

            <div className="required field">
              <label>Date of Birth</label>
              <input
                type="date"
                name="birthDay"
                placeholder="Date of Birth"
                type="date"
                onChange={handleChange}
              />
            </div>

            <button className="fluid ui blue button" type="submit">
              Submit
            </button>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default Profile;
