import React, { useEffect, useState } from "react";
import RestaurantInformation from "./settings/RestaurantInformation";
import RestaurantCoreDetails from "./settings/RestaurantCoreDetails";
import RestaurantPhotos from "./settings/RestaurantPhotos";

const RestaurantSetting = () => {
  const [activeTab, setActiveTab] = useState("information");

  return (
    <>
      <div>
        <div className="border-b border-(--color-gray) flex text-lg gap-10">
          <div
            className={`py-3 ${activeTab === "information" ? "text-(--color-primary) border-b-2" : "text-(--color-secondary)"}`}
            onClick={() => {
              setActiveTab("information");
            }}
          >
            Information
          </div>
          <div
            className={`py-3 ${activeTab === "coreDetails" ? "text-(--color-primary) border-b-2" : "text-(--color-secondary)"}`}
            onClick={() => {
              setActiveTab("coreDetails");
            }}
          >
            Core Details
          </div>
          <div
            className={`py-3 ${activeTab === "photos" ? "text-(--color-primary) border-b-2" : "text-(--color-secondary)"}`}
            onClick={() => {
              setActiveTab("photos");
            }}
          >
            Photos
          </div>
        </div>

        <div>
          {activeTab === "information" && <RestaurantInformation />}
          {activeTab === "coreDetails" && <RestaurantCoreDetails />}
          {activeTab === "photos" && <RestaurantPhotos />}
        </div>
      </div>
    </>
  );
};

export default RestaurantSetting;
