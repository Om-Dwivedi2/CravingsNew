import React, { useState } from "react";
import logo from "../assets/circleLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
import api from "../config/api.config";
import toast from "react-hot-toast";
const Header = () => {
  const { user, setUser, isLogin, setIsLogin } = Auth();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleSignOut = async () => {
    try {
      const response = await api.get("/auth/logout");
      setUser("");
      sessionStorage.removeItem("UserData");
      setIsLogin(false);
      navigate("/");

      toast.success(response.data?.message);
    } catch (error) {
      toast.error(
        error.response?.status + " | " + error.response?.data?.message ||
          error.message,
      );
    }
  };

  return (
    <>
      <header className="bg-(--color-primary) h-[10vh] sticky top-0 z-99 text-white flex  items-center justify-between px-10 py-1">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-13 rounded-[50%] " />
        </Link>

        <div className="space-x-5">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to={"/contact"} className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="space-x-5">
          {isLogin ? (
            <>
              <div className="relative">
                <section className="flex gap-2 items-center ">
                  <div className="w-10 h-10 rounded-[50%] overflow-hidden">
                    <img
                      src={user.photo?.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div 
                    className="flex gap-2 items-center "
                    onClick={() => {
                      toggle ? setToggle(false) : setToggle(true);
                    }}
                  >
                    {user.fullName}
                    <FaAngleDown
                      className="transition-transform duration-250"
                      style={
                        toggle
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                    />
                  </div>
                </section>

                <section
                  className={`absolute bg-white  rounded top-3/2 right-0 shadow-lg p-4 ${toggle ? "block" : "hidden"}`}
                >
                  <div className="flex items-center justify-between  mb-2">
                    <p className="text-[12px] text-gray-600">signed in as</p>
                    <button
                      className="text-[12px] text-white px-2 py-1.5 rounded-lg bg-red-500 font-semibold"
                      onClick={() => handleSignOut()}
                    >
                      Sign Out
                    </button>
                  </div>
                  <div className="text-[13px] text-black">{user.email}</div>
                </section>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="hover:bg-white border border-white hover:text-orange-600 rounded px-2 py-1"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-white border border-white text-orange-600 rounded px-2 py-1"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
