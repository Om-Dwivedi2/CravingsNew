import React from "react";
import { Link } from "react-router-dom";
import circleLogo from "../assets/circleLogo.png";

const Footer = () => {
  return (
    <footer className="text-(--color-neutral-content) bg-(--color-neutral) py-10 px-20 lg:px-45 md:px-30">
      <p className="text-center text-sm">
        --- Your favorite food delivery platform connecting customers with
        restaurants and riders. ---
      </p>

      <main className="grid  grid-cols-1 gap-10 lg:grid-cols-5 md:grid-cols-5 pt-10 pb-5">
        <section className="">
          <img src={circleLogo} alt="" className="w-25" />
        </section>
        <section className="flex flex-col gap-3">
          <div>Quick Links</div>
          <Link to={"/"} className="text-[12px] hover:text-orange-500">
            Home
          </Link>
          <Link to={"/about"} className="text-[12px] hover:text-orange-500">
            About
          </Link>
          <Link to={"/order-now"} className="text-[12px] hover:text-orange-500">
            Order Now
          </Link>
        </section>
        <section className="flex flex-col gap-3">
          <div>For Restaurants</div>
          <Link
            to={"/register/restaurant"}
            className="text-[12px] hover:text-orange-500"
          >
            Partner With Us
          </Link>
          <Link
            to={"/restaurant-dashboard"}
            className="text-[12px] hover:text-orange-500"
          >
            Restaurant Dashboard
          </Link>
        </section>
        <section className="flex flex-col gap-3">
          <div>For Riders</div>
          <Link
            to={"/register/rider"}
            className="text-[12px] hover:text-orange-500"
          >
            Become a Rider
          </Link>
          <Link
            to={"/rider-dashboard"}
            className="text-[12px] hover:text-orange-500"
          >
            Rider Dashboard
          </Link>
        </section>
        <section className="flex flex-col gap-3">
          <div>Feedback & Support</div>
          <Link to={"/feedback"} className="text-[12px] hover:text-orange-500">
            Submit Feedback
          </Link>
          <Link
            to={"/help-center"}
            className="text-[12px] hover:text-orange-500"
          >
            Help Center
          </Link>
          <Link to={"/contact"} className="text-[12px] hover:text-orange-500">
            Contact Us
          </Link>
        </section>
      </main>

      <hr />

      <div className="flex flex-col lg:flex-row justify-between pt-5 items-center text-[12px]">
        <p className="">© 2026 Cravings. All rights reserved.</p>
        <div className="space-x-4">
          <Link to={"/privacy-policy"} className=" hover:text-orange-500">
            Privacy Policy
          </Link>
          <Link to={"/terms-of-service"} className=" hover:text-orange-500">
            Terms of Service
          </Link>
          <Link to={"/site-map"} className=" hover:text-orange-500">
            Site Map
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
