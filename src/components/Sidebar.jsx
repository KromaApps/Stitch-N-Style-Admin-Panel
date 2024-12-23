import React from "react";
import { NavLink } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { FaList } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
        >
          <CiCirclePlus size={32} />
          <p className="'hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
        >
          <FaList size={32} />
          <p className="'hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
        >
          <GoPackage size={32} />
          <p className="'hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;