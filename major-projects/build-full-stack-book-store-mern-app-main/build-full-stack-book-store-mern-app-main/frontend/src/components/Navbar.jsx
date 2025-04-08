import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const token = localStorage.getItem("token");

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <NavLink to="/">
            <img
              className=" hover:cursor-pointer h-20 p-2"
              src={logo}
              alt="img"
            />
          </NavLink>

          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-4 flex list-none">
            <li className="hover:cursor-pointer hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold  text-primary" : ""
                }
                to="/"
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li className="hover:cursor-pointer hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold  text-primary" : ""
                }
                to="/Shop"
              >
                {" "}
                Shop
              </NavLink>
            </li>

            <li className="hover:cursor-pointer hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold text-primary" : ""
                }
                to="/user-dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="hover:cursor-pointer hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold text-primary" : ""
                }
                to="/Orders"
              >
                Orders
              </NavLink>
            </li>

            <li className="hover:cursor-pointer hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold text-primary" : ""
                }
                to="/checkout"
              >
                checkout
              </NavLink>
            </li>
          </div>
        </div>

        {/* rigth side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : token ? (
              <Link to="/dashboard" className="border-b-2 border-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
