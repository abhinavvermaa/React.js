import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-white sm:flex flex-row sm:px-20  display-none py-5 sm:justify-between ">
      <img className="h-20 p-2" src=".\logo\logo.png" alt="img" />
      <ul className="flex flex-row items-center space-x-10 text-gray-700 ">
        <li>Home</li>
        <li>Deals</li>
        <li>New Arrivals</li>
        <li>SignIn</li>
        <li>
          <button className="bg-blue-950 text-white text-xl px-4 py-2 border-transparent rounded-xl shadow-gray-100-2xl hover:bg-black hover:shadow-gray-300 ">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
