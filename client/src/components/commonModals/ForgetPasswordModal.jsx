import React, { useState } from "react";
import {
  IoCloseOutline,
  IoMailOutline,
  IoShieldCheckmarkOutline,
  IoLockClosedOutline,
  IoEyeOutline,
  IoCheckmarkSharp,
} from "react-icons/io5";
import api from "../../config/api.config";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ open, toClose }) => {
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (!isOtpSend) {
        const response = await api.post("/auth/send-otp", formData);
        toast.success(response.data.message);
        setIsOtpSend(true);
      }
      if (isOtpSend && !isOtpVerified) {
        const res = await api.post("/auth/verify-otp", formData);
        toast.success(res.data.message);
        setIsOtpVerified(true);
      }
      if (isOtpSend && isOtpVerified) {
        const res = await api.post("/auth/reset-password", formData);
        toast.success(res.data.message);
        handleCloseModal();
      }
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setFormData({
      email: "",
      otp: "",
      newPassword: "",
      confirmNewPassword: "",
    });

    toClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-[440px] rounded-2xl p-8 shadow-xl relative border border-(--color-base-300)">
        {/* Close Button */}
        <button
          onClick={toClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <IoCloseOutline className="text-2xl" />
        </button>

        {/* STEP 1: Forgot Password */}
        {!isOtpSend && (
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            {/* Visual Icon Header */}
            <div className="relative w-24 h-24 mb-6 rounded-full bg-[#FFF2EE] border border-dashed border-[#EEB08D] flex items-center justify-center">
              <IoMailOutline className="text-4xl text-(--color-primary)" />
            </div>

            <span className="text-[12px] font-semibold text-(--color-primary) mb-1 uppercase">
              Step 1 of 3
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Forgot Password?
            </h2>
            <p className="text-[13px] text-gray-500 text-center mb-6 px-2">
              Enter your registered email address and we'll send you a 6-digit
              OTP.
            </p>

            {/* Email Input */}
            <div className="w-full flex flex-col gap-1.5 mb-6 text-left">
              <label className="text-[12px] font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative flex items-center">
                <IoMailOutline className="absolute left-3 text-gray-400 text-lg" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-(--color-base-300) rounded-lg focus:outline-none focus:border-(--color-primary) text-gray-900 text-[14px]"
                />
              </div>
            </div>

            {/* Send OTP Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 text-white font-semibold rounded-lg hover:brightness-95 transition text-[14px] cursor-pointer text-center ${isLoading ? "bg-(--color-base-300)" : "bg-(--color-primary)"}`}
            >
              {isLoading ? "Loading..." : "Send OTP"}
            </button>
          
            {/* Divider OR */}
            <div className="w-full flex items-center justify-center my-5 gap-3">
              <div className="h-[1px] bg-gray-200 grow"></div>
              <span className="text-[11px] text-gray-400 font-semibold uppercase">
                OR
              </span>
              <div className="h-[1px] bg-gray-200 grow"></div>
            </div>

            {/* Back to Login */}
            <button
              type="button"
              onClick={toClose}
              className="text-[14px] font-semibold text-(--color-primary) hover:underline cursor-pointer"
            >
              Back to Login
            </button>
          </form>
        )}

        {/* STEP 2: Verify OTP */}
        {isOtpSend && !isOtpVerified && (
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            {/* Visual Icon Header */}
            <div className="relative w-24 h-24 mb-6 rounded-full bg-[#FFF2EE] border border-dashed border-[#EEB08D] flex items-center justify-center">
              <IoShieldCheckmarkOutline className="text-4xl text-(--color-primary)" />
            </div>

            <span className="text-[12px] font-semibold text-(--color-primary) mb-1 uppercase">
              Step 2 of 3
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verify OTP
            </h2>
            <p className="text-[13px] text-gray-500 text-center mb-6">
              Enter the 6-digit code sent to <br />
              <span className="text-(--color-primary) font-medium">
                {formData.email}
              </span>
            </p>

            {/* OTP Code Input Box */}

            {/* <div className="flex gap-2.5 mb-5 justify-center w-full">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <input
                  key={num}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-(--color-primary) bg-white "
                />
              ))}
            </div> */}

            <div className="w-full flex flex-col gap-1.5 mb-5 text-left">
              <label className="text-[12px] font-semibold text-gray-700">
                OTP Code
              </label>
              <div className="relative flex items-center">
                <IoShieldCheckmarkOutline className="absolute left-3 text-gray-400 text-lg" />
                <input
                  name="otp"
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-(--color-base-300) rounded-lg focus:outline-none focus:border-(--color-primary) text-gray-900 text-[14px]"
                />
              </div>
            </div>

            {/* Timer countdown info */}
            <div className="text-[13px] text-gray-500 mb-6">
              OTP expires in{" "}
              <span className="text-(--color-primary) font-semibold">
                02:45
              </span>
            </div>

            {/* Resend Link */}
            <div className="text-[13px] text-gray-500 mb-8">
              Didn't receive the code?{" "}
              <button
                type="button"
                className="text-(--color-primary) font-semibold hover:underline cursor-pointer"
              >
                Resend OTP
              </button>
            </div>

            {/* Buttons Flow */}
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setIsOtpSend(false)}
                className="w-1/2 py-3 border border-(--color-primary) text-(--color-primary) font-semibold rounded-lg hover:bg-orange-50 active:scale-[0.98] transition text-[14px] cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="w-1/2 py-3 bg-(--color-primary) text-white font-semibold rounded-lg hover:brightness-95 active:scale-[0.98] transition text-[14px] cursor-pointer text-center"
              >
                Verify OTP
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Reset Password */}
        {isOtpSend && isOtpVerified && (
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            {/* Visual Icon Header */}
            <div className="relative w-24 h-24 mb-6 rounded-full bg-[#FFF2EE] border border-dashed border-[#EEB08D] flex items-center justify-center">
              <IoLockClosedOutline className="text-4xl text-(--color-primary)" />
            </div>

            <span className="text-[12px] font-semibold text-(--color-primary) mb-1 uppercase">
              Step 3 of 3
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Reset Password
            </h2>
            <p className="text-[13px] text-gray-500 text-center mb-6">
              Create a new password for your account.
            </p>

            {/* New Password field */}
            <div className="w-full flex flex-col gap-1 mb-4 text-left">
              <label className="text-[12px] font-semibold text-gray-700">
                New Password
              </label>
              <div className="relative flex items-center">
                <IoLockClosedOutline className="absolute left-3 text-gray-500 text-lg" />
                <input
                  name="newPassword"
                  type="password"
                  placeholder="Enter new Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-(--color-base-300) rounded-lg focus:outline-none focus:border-(--color-primary) text-gray-900 text-[14px]"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <IoEyeOutline className="text-lg" />
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div className="w-full flex flex-col gap-1 mb-5 text-left">
              <label className="text-[12px] font-semibold text-gray-700">
                Confirm New Password
              </label>
              <div className="relative flex items-center">
                <IoLockClosedOutline className="absolute left-3 text-gray-500 text-lg" />
                <input
                  name="confirmNewPassword"
                  type="password"
                  placeholder="Confirm new Password"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-(--color-base-300) rounded-lg focus:outline-none focus:border-(--color-primary) text-gray-900 text-[14px]"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <IoEyeOutline className="text-lg" />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={() => setIsOtpVerified(false)}
                className="w-1/2 py-3 border border-(--color-primary) text-(--color-primary) font-semibold rounded-lg hover:bg-orange-50 active:scale-[0.98] transition text-[14px] cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="w-1/2 py-3 bg-(--color-primary) text-white font-semibold rounded-lg hover:brightness-95 active:scale-[0.98] transition text-[14px] cursor-pointer text-center"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
