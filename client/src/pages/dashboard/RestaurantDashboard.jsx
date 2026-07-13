import React, { useEffect, useState } from "react";
import api from "../../config/api.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/restaurantDashboard/RestaurantSidebar";

import { Auth } from "../../context/AuthContext";
import Order from "../../components/restaurantDashboard/RestaurantOrder";
import Overview from "../../components/restaurantDashboard/RestaurantOverview";
import Wishlist from "../../components/restaurantDashboard/RestaurantWishList";
import Settings from "../../components/restaurantDashboard/RestaurantSetting";
import AccessDeniedModal from "./modals/AccessDeniedModal";
const RestaurantDashboard = () => {
  const navigate = useNavigate();
  const { user, setUser, isLogin, setIsLogin } = Auth();

  const [active, setActive] = useState("Overview");

  if (!isLogin || user.userType !== "restaurant") {
    return <AccessDeniedModal role={"restaurant"} />;
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

export default RestaurantDashboard;
