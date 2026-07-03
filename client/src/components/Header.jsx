import React, { useState } from "react";
import logo from "../assets/circleLogo.png";
import { Link } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
  const { user, setUser, isLogin, setIsLogin } = Auth();

  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  
  console.log(user);

  return (
    <>
      <header className="bg-(--color-primary) h-[10vh] text-white flex  items-center justify-between px-10 py-1">
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
              <div className="flex gap-2 items-center ">
                <div className="w-10 h-10 rounded-[50%] overflow-hidden">
                  <img
                    src={user.photo?.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>{user.fullName}</div>
                <div className="transition-transform duration-250"
                  onClick={() => {
                    toggle ? setToggle(false) : setToggle(true);
                  }}
                  style={toggle ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }}
                >
                  <FaAngleDown />
                </div>
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
