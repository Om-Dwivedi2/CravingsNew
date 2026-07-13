import React, { useEffect, useState } from "react";
import api from "../../config/api.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/customerDashboard/CustomerSidebar";

import { Auth } from "../../context/AuthContext";
import Order from "../../components/customerDashboard/CustomerOrder";
import Overview from "../../components/customerDashboard/CustomerOverview";
import Wishlist from "../../components/customerDashboard/CustomerWishList";
import Settings from "../../components/customerDashboard/CustomerSetting";
import AccessDeniedModal from "./modals/AccessDeniedModal";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, isLogin, setIsLogin } = Auth();

  const [active, setActive] = useState("Overview");

  if (!isLogin || user.userType !== "customer") {
    return <AccessDeniedModal role={"customer"} />;
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

export default CustomerDashboard;
