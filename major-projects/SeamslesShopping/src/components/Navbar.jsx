import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" sticky top-0 w-full z-50 bg-white sm:flex flex-row sm:px-20  display-none  sm:justify-between ">
      <NavLink to="/"><img className=" hover:cursor-pointer h-20 p-2" src=".\logo\logo.png" alt="img" /></NavLink>
      <ul className="flex flex-row items-center space-x-10 text-gray-700 ">
        <li className="hover:cursor-pointer hover:font-semibold"><NavLink className={({isActive})=>(isActive ? "font-semibold text-red-200":"" )} to="/"> Home</NavLink></li>
        <li className="hover:cursor-pointer hover:font-semibold"><NavLink className={({ isActive })=>(isActive ? "font-semibold text-red-200":"" )} to="/shop" >shop</NavLink></li>
        <li className="hover:cursor-pointer hover:font-semibold">New Arrivals</li>
        <li className="hover:cursor-pointer hover:font-semibold">SignIn</li>
        <li className="relative hover:cursor-pointer">
  {/* Shopping Bag Icon */}
  <NavLink to="/Bagsummary"><img className="h-6" src="./logo/bag.png" alt="Shopping Bag" />

{/* Item Count Badge */}
<span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
  1 {/* Replace with dynamic count */}
</span></NavLink>
</li>

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
