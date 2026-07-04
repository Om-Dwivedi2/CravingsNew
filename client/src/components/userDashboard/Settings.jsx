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

const Settings = () => {
  const { user, setUser, isLogin, setIsLogin } = Auth();
  const [isEdit, setIsEdit] = useState(false);
  const [tempUser, setTempUser] = useState({
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
  });

  useEffect(() => {
    console.log(user);
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (e) => {};

  return (
    <>
      <h1 className="text-2xl">Settings</h1>
      <p className="text-(--color-secondary) pb-5 ">
        Manage your accout information and preferences
      </p>
      <div className="grid grid-cols-[4fr_3fr] gap-5">
        <div className="bg-white rounded-lg p-5 shadow space-y-2">
          <h2 className="text-xl">Profile Information</h2>
          <p className="text-(--color-secondary) text-sm">
            Update your profile details{" "}
          </p>

          <div className="flex gap-20 items-center px-10 py-5">
            <section className="flex flex-col gap-2 items-center">
              <div className="w-30 h-30 rounded-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover "
                  src={user.photo.url}
                  alt=""
                />
              </div>
              <div className="text-sm text-(--color-primary) font-semibold">
                Change Photo
              </div>
              <div className="text-xs text-(--color-secondary)">
                JPG, PNG or GIF, Max 2MB.
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
                    className="focus:outline-none w-full bg-white"
                    value={tempUser.fullName}
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
                    className="focus:outline-none w-full bg-white"
                    value={tempUser.phone}
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
                    className="focus:outline-none w-full bg-white"
                    value={tempUser.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-end gap-5">
            {isEdit ? (
              <>
                <button className="border py-2 px-4 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95">
                  Save Changes
                </button>
                <button className="border py-2 px-4 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95">
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="border flex gap-2 items-center py-2 px-4 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
                onClick={console.log("hello")}
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

export default Settings;
