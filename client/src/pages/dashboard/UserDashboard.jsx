import React, { useEffect, useState } from "react";
import api from "../../config/api.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainDashboard from "./MainDashboard";

const UserDashboard = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();


  async function defaultFunction() {
    try {
      const response = await api.get("/user/dashboard");

      toast.success(response.status + " | " + response.data.message);
    } catch (error) {
      toast.error(
        error.response?.status + " | " + error.response?.data?.message ||
          error.message,
      );

      navigate("/login");
    }
  }

  

  useEffect(() => {
    defaultFunction();
    setUserData(JSON.parse(sessionStorage.getItem("UserData")));
  }, []);

  return (
    <>
      {/* <div>Welcome Back</div>
      <div>{userData.fullName}</div>
      <div>skfnck,sjemfhncw,ejsmfn</div> */}

        <div className="flex">
          <Sidebar/>
          <MainDashboard userData={userData}/>
        </div>


    </>
  );
};

export default UserDashboard;
