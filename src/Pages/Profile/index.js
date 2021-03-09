import React, { useState, useEffect } from "react";
import { authUser } from "../../database/authQueries";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await authUser();
      setUser(user);
    }
    fetchData();
  }, [user]);

  console.log(user);

  return (
    <div>
      <p>Hola desde Profile</p>
    </div>
  );
};

export default Profile;
