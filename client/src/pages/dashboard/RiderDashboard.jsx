import React, { useEffect, useState } from "react";
import api from "../../config/api.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/riderDashboard/RiderSidebar";

import { Auth } from "../../context/AuthContext";
import Order from "../../components/riderDashboard/RiderOrder";
import Overview from "../../components/riderDashboard/RiderOverview";
import Wishlist from "../../components/riderDashboard/RiderWishList";
import Settings from "../../components/riderDashboard/RiderSetting";
import AccessDeniedModal from "./modals/AccessDeniedModal";
const RiderDashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, isLogin, setIsLogin } = Auth();

  const [active, setActive] = useState("Overview");

  if (!isLogin || user.userType !== "rider") {
    return <AccessDeniedModal role={"rider"} />;
  }

  return (
    <>
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <div className="bg-(--color-background) w-full p-10 text-black">
          {active == "Overview" && <Overview />}
          {active == "Order" && <Order />}
          {active == "Wishlist" && <Wishlist />}
          {active == "Settings" && <Settings />}
        </div>
      </div>
    </>
  );
};

export default RiderDashboard;
