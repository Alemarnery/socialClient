import React, { useState, useEffect } from "react";
import { authUser } from "../../database/authQueries";
import Layout from "../../components/layout";
import Form from "../../components/Form";
import FormProfile from "../../Pages/Profile/FormProfile";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const userResponse = await authUser();
      if (userResponse !== userData) {
        setUserData(userResponse);
      }
    }
    fetchData();
  }, []);

  if (!userData) {
    return <div>!</div>;
  }

  return (
    <Layout title="Profile">
      <div className="ui five wide card column centered">
        <Form title="User Profile">
          <FormProfile userValues={userData} />
        </Form>
      </div>
    </Layout>
  );
};

export default Profile;
