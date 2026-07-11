import React from "react";
import { useState } from "react";
import {
  IoCloseOutline,
  IoEyeOutline,
  IoLockClosedOutline,
} from "react-icons/io5";


const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    oldPassword: "",
    confirmNewPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e)=>{

    try {
      
      if (formData.newPassword ) {
        
      }

    } catch (error) {
      console.log(error.message);

    }


  }




  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal Card */}
      <div className="bg-white w-full max-w-[560px] rounded-lg p-6 shadow-lg relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFF2EE] flex items-center justify-center border border-[#FFE4DC]">
              <IoLockClosedOutline className="text-xl text-(--color-primary)" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Change Password
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <IoCloseOutline className="text-2xl" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-[14px]">
          {/* Current Password */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700">
              Current Password
            </label>
            <div className="relative flex items-center">
              <input
                name="oldPassword"
                value={formData.oldPassword}
                type="password"
                onChange={handleChange}
                placeholder="Enter current password"
                className="w-full px-3 py-2 bg-white border border-(--color-base-300) rounded focus:outline-none focus:border-(--color-primary) text-gray-900 pr-10"
              />
              <IoEyeOutline className="absolute right-3 text-gray-400 text-lg" />
            </div>
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700">New Password</label>
            <div className="relative flex items-center">
              <input
                name="newPassword"
                value={formData.newPassword}
                type="password"
                onChange={handleChange}

                placeholder="Enter new password"
                className="w-full px-3 py-2 bg-white border border-(--color-base-300) rounded focus:outline-none focus:border-(--color-primary) text-gray-900 pr-10"
              />
              <IoEyeOutline className="absolute right-3 text-gray-400 text-lg" />
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-gray-700">
              Confirm New Password
            </label>
            <div className="relative flex items-center">
              <input
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                type="password"
                onChange={handleChange}

                placeholder="Confirm new password"
                className="w-full px-3 py-2 bg-white border border-(--color-base-300) rounded focus:outline-none focus:border-(--color-primary) text-gray-900 pr-10"
              />
              <IoEyeOutline className="absolute right-3 text-gray-400 text-lg" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="border py-2 px-4 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="border py-2 px-4 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
