import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import { LuLogOut } from "react-icons/lu";
const Sidebar = () => {
  return (
    <>
      <nav className="bg-white w-[20vw] p-5" >
        <section className="flex flex-col">
          <button className="flex items-center gap-3  text-lg font-se text-(--color-neutral) p-2 w-full hover:text-(--color-primary) hover:bg-[#FEE9D9] rounded-lg text-start"> <LiaHomeSolid /> Dashboard </button>
          <button className="flex items-center gap-3  text-lg font-se text-(--color-neutral) p-2 w-full hover:text-(--color-primary) hover:bg-[#FEE9D9] rounded-lg text-start"> <LiaShoppingBagSolid /> My Orders</button>
          <button className="flex items-center gap-3  text-lg font-se text-(--color-neutral) p-2 w-full hover:text-(--color-primary) hover:bg-[#FEE9D9] rounded-lg text-start"> <LiaQuestionCircleSolid /> Help and Support</button>
          <button className="flex items-center gap-3  text-lg font-se text-(--color-neutral) p-2 w-full hover:text-(--color-primary) hover:bg-[#FEE9D9] rounded-lg text-start"> <LuLogOut /> Logout</button>
        </section>

        
      </nav>



    </>
  );
};

export default Sidebar;
