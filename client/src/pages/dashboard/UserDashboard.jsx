import React, { useEffect, useState } from "react";
import api from "../../config/api.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/userDashboard/Sidebar";

import { Auth } from "../../context/AuthContext";
import Order from "../../components/userDashboard/Order";
import Overview from "../../components/userDashboard/Overview";
import Wishlist from "../../components/userDashboard/Wishlist";
import Settings from "../../components/userDashboard/Settings";
const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, isLogin, setIsLogin } = Auth();

  const [active, setActive] = useState("Overview");

  async function checkToken() {
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
    checkToken();
  }, [isLogin]);

  return (
    <>
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <div className="bg-(--color-background) w-full px-5 text-black">
          {active == "Overview" && <Overview />}
          {active == "Order" && <Order />}
          {active == "Wishlist" && <Wishlist />}
          {active == "Settings" && <Settings />}

        </div>
      </div>
    </>
  );
};

export default UserDashboard;
