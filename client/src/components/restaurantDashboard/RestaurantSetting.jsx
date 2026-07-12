import React, { useEffect, useState } from "react";
import { Auth } from "../../context/AuthContext";
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import api from "../../config/api.config";
import toast from "react-hot-toast";

const RestaurantSetting = () => {
  const { user, setUser, isLogin, setIsLogin } = Auth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  });


  const [profilePic, setProfilePic] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(user.photo?.url);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (e) => {
    try {
      setIsProcessing(true);
      const payload = new FormData();

      payload.append("fullName", formData.fullName);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email.toLowerCase());
      payload.append("displayPic", profilePic);

      const response = await api.put(`/common/edit-profile`, payload);

      setUser(response.data.data);

      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response.data.message ||
          error.message,
      );

      setPhotoPreview(user.photo?.url);
    } finally {
      setIsEdit(false);
      setIsProcessing(false);
    }
  };

  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    setPhotoPreview(URL.createObjectURL(file));
    setProfilePic(file);
  };

  return (
    <>
      <h1 className="text-2xl">Restaurant Setting</h1>
      <p className="text-(--color-secondary) pb-5 ">
        Manage your accout information and preferences
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-5">
        <div className="bg-white rounded-lg p-5 shadow space-y-2">
          <h2 className="text-xl">Profile Information</h2>
          <p className="text-(--color-secondary) text-sm">
            Update your profile details
          </p>

          <div className="flex gap-20 items-center px-10 py-5">
            <section className="flex flex-col gap-2 items-center w-[30%]">
              <div className="relative">
                <div className="  w-30 h-30 rounded-[50%] overflow-hidden border-2 border-(--color-primary)">
                  <img
                    className="w-full h-full object-cover "
                    src={photoPreview}
                    alt=""
                  />
                </div>
                <label
                  htmlFor="photoUpload"
                  className={`absolute rounded-[50%] bg-(--color-primary) text-white p-2 bottom-0 right-0 cursor-pointer ${isEdit ? "block" : "hidden"}`}
                >
                  <FaCamera />
                </label>

                <input
                  type="file"
                  name="photoUpload"
                  id="photoUpload"
                  accept="image/*"
                  className="hidden"
                  disabled={!isEdit}
                  onChange={handleUploadImg}
                />
              </div>
              <div className="text-sm text-(--color-primary) font-semibold">
                Change Photo
              </div>
            </section>
            <section className="flex flex-col gap-2 w-full ">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="fullName" className="font-semibold">
                  Name
                </label>
                <div className="flex gap-3 border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:border-(--color-primary) items-center ">
                  <FiUser className="text-(--color-secondary)" />
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className={`focus:outline-none w-full bg-white ${isEdit || "cursor-not-allowed"} `}
                    disabled={!isEdit}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <div className="flex gap-3 border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:border-(--color-primary) items-center ">
                  <MdOutlineLocalPhone className="text-(--color-secondary)" />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className={`focus:outline-none w-full bg-white ${isEdit || "cursor-not-allowed"} `}
                    disabled={!isEdit}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <div className="flex gap-3 border border-gray-300 rounded-md py-1 px-4 focus:outline-none focus:border-(--color-primary) items-center ">
                  <MdOutlineEmail className="text-(--color-secondary)" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:outline-none w-full bg-white cursor-not-allowed"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-end gap-5">
            {isEdit ? (
              <>
                <button
                  className="border py-2 px-4 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                  onClick={async () => {
                    handleSaveChanges();
                  }}
                >
                  {isProcessing ? "Saving..." : "Save Changes"}
                </button>
                <button
                  className="border py-2 px-4 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="border flex gap-2 items-center py-2 px-4 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <MdOutlineModeEdit className="text-lg" />
                Edit
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg p-5 shadow flex flex-col gap-2 ">
          <h2 className="text-xl">Account Settings</h2>
          <p className="text-(--color-secondary) text-sm">
            Manage your account preferences.
          </p>

          {/* change password */}
          <div className=" flex gap-3 items-center border-b py-3 border-(--color-gray)">
            <IoLockClosedOutline className="text-xl" />
            <div className="flex-1">
              <div className="font-medium ">Change Password</div>
              <p className="text-sm text-(--color-secondary)">
                Update your password
              </p>
            </div>
            <LiaAngleRightSolid className="text-(--color-secondary)" />
          </div>

          {/* Notification Preferences */}

          <div className=" flex gap-3 items-center border-b py-3 border-(--color-gray)">
            <IoNotificationsOutline className="text-xl" />
            <div className="flex-1">
              <div className="font-medium ">Notification Preferences</div>
              <p className="text-sm text-(--color-secondary)">
                Manage your notification settings
              </p>
            </div>
            <LiaAngleRightSolid className="text-(--color-secondary)" />
          </div>

          {/* Address */}

          <div className=" flex gap-3 items-center border-b py-3 border-(--color-gray)">
            <IoLocationOutline className="text-xl" />
            <div className="flex-1">
              <div className="font-medium ">Address</div>
              <p className="text-sm text-(--color-secondary)">
                Manage your address information
              </p>
            </div>
            <LiaAngleRightSolid className="text-(--color-secondary)" />
          </div>

          {/* Payment Method */}

          <div className=" flex gap-3 items-center border-b py-3 border-(--color-gray)">
            <HiOutlineCreditCard className="text-xl" />
            <div className="flex-1">
              <div className="font-medium ">Payment Method</div>
              <p className="text-sm text-(--color-secondary)">
                Manage your payment methods
              </p>
            </div>
            <LiaAngleRightSolid className="text-(--color-secondary)" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantSetting;
