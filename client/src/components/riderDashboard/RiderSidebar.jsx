import React from "react";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import { LuLogOut } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { LiaHomeSolid } from "react-icons/lia";

const RiderSidebar = ({ active, setActive }) => {
  const MenuItems = [
    { name: "Overview", icon: <LiaHomeSolid /> },
    { name: "Order", icon: <LiaShoppingBagSolid /> },
    { name: "Wishlist", icon: <LiaQuestionCircleSolid /> },
    { name: "Settings", icon: <IoMdSettings /> },
  ];

  return (
    <>
      <nav className="bg-white w-[20vw] p-5">
        <section className="flex flex-col text-black">
          {MenuItems.map((item, inx) => (
            <button
              className={`flex items-center gap-3 text-lg font-se text-(--color-neutral) p-2 w-full rounded-lg text-start ${active == item.name && "bg-(--color-primary-subtle) text-(--color-primary)"}`}
              onClick={() => {
                setActive(item.name);
                console.log("hello");
              }}
            >
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </button>
          ))}
        </section>
      </nav>
    </>
  );
};

export default RiderSidebar;
