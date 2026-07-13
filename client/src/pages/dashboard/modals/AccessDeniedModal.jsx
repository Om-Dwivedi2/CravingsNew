import React from "react";
import {
  IoLockClosedOutline,
  IoShieldOutline,
  IoArrowForward,
} from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const AccessDeniedModal = ({ role }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <div
        className={`relative bg-[url("/retaurantBG.avif")] bg-cover bg-center h-[90vh] w-full flex items-center justify-center`}
      >
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-[560px] rounded-lg p-6 shadow-lg relative">
            <div className="flex flex-col items-center text-center p-6">
              {/* Lock Circle */}
              <div className="relative w-24 h-24 rounded-full bg-[#FFF2EE] border border-[#FFE4DC] flex items-center justify-center mb-6 shadow-sm">
                <IoLockClosedOutline className="text-4xl text-[#C23A0C]" />
              </div>

              <h2 className="text-3xl font-bold text-[#1E293B] mb-2">
                Access Denied
              </h2>
              <p className="text-[#64748B] mb-6 text-medium max-w-[340px]">
                You need to be logged in as a {role} to view this page.
              </p>

              {/* Notice Box */}
              <div className="w-full bg-[#FFF9F6] border border-[#FFE4DC] rounded-xl p-4 flex items-center justify-center  gap-5 text-left mb-6">
                <IoShieldOutline className="text-2xl text-[#C23A0C] mt-0.5 shrink-0" />
                <p className="text-sm text-[#475569] font-medium">
                  Please login to your account <br /> or create a new one to
                  continue.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="w-full py-3 bg-[#C23A0C] hover:bg-[#A02D09] text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Go to Login
                  <IoArrowForward className="text-lg" />
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full py-3 bg-white hover:bg-gray-50 text-[#C23A0C] border border-[#C23A0C] rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Go to Home
                  <HiOutlineHome className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessDeniedModal;
