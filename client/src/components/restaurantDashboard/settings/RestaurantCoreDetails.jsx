import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const RestaurantCoreDetails = () => {
  const [isAddressEdit, setIsAddressEdit] = useState(false);
  const [isBankingEdit, setIsBankingEdit] = useState(false);
  const [isSocialEdit, setIsSocialEdit] = useState(false);

  return (
    <>
      <div className="">
        {/* Address Section */}
        <div className="bg-white rounded-lg p-5 shadow space-y-2 mt-5">
          <section className="flex justify-between items-center border-b border-(--color-gray) pb-3">
            <h2 className="text-xl text-(--color-primary) font-semibold">
              Address
            </h2>

            <div className="flex gap-3">
              {isAddressEdit ? (
                <>
                  <button
                    className="border py-1.5 px-3 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                    onClick={() => setIsAddressEdit(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    className="border py-1.5 px-3 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
                    onClick={() => setIsAddressEdit(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border flex gap-2 items-center py-1.5 px-3 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                    onClick={() => setIsAddressEdit(true)}
                  >
                    <MdOutlineModeEdit className="text-lg" />
                    Edit
                  </button>
                </>
              )}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-6 gap-5 pt-4">
            <div className="flex flex-col gap-1 w-full md:col-span-2">
              <label htmlFor="address" className="font-semibold text-sm">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:col-span-2">
              <label htmlFor="city" className="font-semibold text-sm">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:col-span-2">
              <label htmlFor="state" className="font-semibold text-sm">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:col-span-2">
              <label htmlFor="pinCode" className="font-semibold text-sm">
                Pin Code
              </label>
              <input
                type="text"
                name="pinCode"
                id="pinCode"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:col-span-2">
              <label htmlFor="country" className="font-semibold text-sm">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:col-span-1">
              <label htmlFor="latitude" className="font-semibold text-sm">
                Latitude
              </label>
              <input
                type="text"
                name="latitude"
                id="latitude"
                placeholder="e.g. 28.6139"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full md:col-span-1">
              <label htmlFor="longitude" className="font-semibold text-sm">
                Longitude
              </label>
              <input
                type="text"
                name="longitude"
                id="longitude"
                placeholder="e.g. 77.2090"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isAddressEdit || "cursor-not-allowed"}`}
                disabled={!isAddressEdit}
              />
            </div>
          </section>
        </div>

        {/* Banking & Documents Section */}
        <div className="bg-white rounded-lg p-5 shadow space-y-2 mt-5">
          <section className="flex justify-between items-center border-b border-(--color-gray) pb-3">
            <h2 className="text-xl text-(--color-primary) font-semibold">
              Banking & Documents
            </h2>

            <div className="flex gap-3">
              {isBankingEdit ? (
                <>
                  <button
                    className="border py-1.5 px-3 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                    onClick={() => setIsBankingEdit(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    className="border py-1.5 px-3 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
                    onClick={() => setIsBankingEdit(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border flex gap-2 items-center py-1.5 px-3 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                    onClick={() => setIsBankingEdit(true)}
                  >
                    <MdOutlineModeEdit className="text-lg" />
                    Edit
                  </button>
                </>
              )}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="bankName" className="font-semibold text-sm">
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                id="bankName"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isBankingEdit || "cursor-not-allowed"}`}
                disabled={!isBankingEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="accountNumber" className="font-semibold text-sm">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isBankingEdit || "cursor-not-allowed"}`}
                disabled={!isBankingEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="ifscCode" className="font-semibold text-sm">
                IFSC Code
              </label>
              <input
                type="text"
                name="ifscCode"
                id="ifscCode"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isBankingEdit || "cursor-not-allowed"}`}
                disabled={!isBankingEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="panCardNumber" className="font-semibold text-sm">
                Pan Card Number
              </label>
              <input
                type="text"
                name="panCardNumber"
                id="panCardNumber"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isBankingEdit || "cursor-not-allowed"}`}
                disabled={!isBankingEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="gstNumber" className="font-semibold text-sm">
                GST Number
              </label>
              <input
                type="text"
                name="gstNumber"
                id="gstNumber"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isBankingEdit || "cursor-not-allowed"}`}
                disabled={!isBankingEdit}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="fssaiCode" className="font-semibold text-sm">
                fssai Code
              </label>
              <input
                type="text"
                name="fssaiCode"
                id="fssaiCode"
                className={`border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white ${isBankingEdit || "cursor-not-allowed"}`}
                disabled={!isBankingEdit}
              />
            </div>
          </section>
        </div>

        {/* Social Media Links Section */}
        <div className="bg-white rounded-lg p-5 shadow space-y-2 mt-5">
          <section className="flex justify-between items-center border-b border-(--color-gray) pb-3">
            <h2 className="text-xl text-(--color-primary) font-semibold">
              Social Media Links
            </h2>

            <div className="flex gap-3">
              {isSocialEdit ? (
                <>
                  <button
                    className="border py-1.5 px-3 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                    onClick={() => setIsSocialEdit(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    className="border py-1.5 px-3 border-(--color-primary) rounded-lg text-(--color-primary) font-medium active:scale-95"
                    onClick={() => setIsSocialEdit(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border flex gap-2 items-center py-1.5 px-3 border-(--color-primary) bg-(--color-primary) rounded-lg text-white font-medium active:scale-95"
                    onClick={() => setIsSocialEdit(true)}
                  >
                    <MdOutlineModeEdit className="text-lg" />
                    Edit
                  </button>
                </>
              )}
            </div>
          </section>

          <section className="pt-2">
            {isSocialEdit ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="facebook" className="font-semibold text-sm">
                    Facebook
                  </label>
                  <input
                    type="text"
                    name="facebook"
                    id="facebook"
                    placeholder="https://facebook.com/your-restaurant"
                    className="border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="instagram" className="font-semibold text-sm">
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    placeholder="https://instagram.com/your-restaurant"
                    className="border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="twitter" className="font-semibold text-sm">
                    Twitter (X)
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    placeholder="https://twitter.com/your-restaurant"
                    className="border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="website" className="font-semibold text-sm">
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="https://your-restaurant.com"
                    className="border border-gray-300 rounded-md py-1.5 px-4 focus:outline-none focus:border-(--color-primary) w-full bg-white"
                  />
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500 font-medium">
                No social media links added.
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default RestaurantCoreDetails;