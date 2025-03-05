import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" sticky top-0 w-full z-50 bg-white sm:flex flex-row sm:px-20  display-none  sm:justify-between ">
      <img className=" hover:cursor-pointer h-20 p-2" src=".\logo\logo.png" alt="img" />
      <ul className="flex flex-row items-center space-x-10 text-gray-700 ">
        <li className="hover:cursor-pointer hover:font-semibold"><NavLink className={({isActive})=>(isActive ? "font-semibold text-red-200":"" )} to="/"> Home</NavLink></li>
        <li className="hover:cursor-pointer hover:font-semibold"><NavLink className={({ isActive })=>(isActive ? "font-semibold text-red-200":"" )} to="/shop" >shop</NavLink></li>
        <li className="hover:cursor-pointer hover:font-semibold">New Arrivals</li>
        <li className="hover:cursor-pointer hover:font-semibold">SignIn</li>
        <li >
          <button className="hover:cursor-pointer bg-blue-950 text-white text-xl px-4 py-2 border-transparent rounded-xl shadow-gray-100-2xl hover:bg-black hover:shadow-gray-300 ">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
