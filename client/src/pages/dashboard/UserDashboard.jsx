import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem("UserData")));
  }, []);

  console.log(userData);

  return (
    <>
      <div>Welcome Back</div>
      <div>{userData.fullName}</div>
      <div>skfnck,sjemfhncw,ejsmfn</div>
    </>
  );
};

export default UserDashboard;
