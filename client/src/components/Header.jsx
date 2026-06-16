import React from "react";
import logo from "../assets/circleLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
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
        </div>
      </header>
    </>
  );
};

export default Header;
