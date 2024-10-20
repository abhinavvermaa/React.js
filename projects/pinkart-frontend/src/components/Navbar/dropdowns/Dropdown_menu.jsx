import React, { useState } from "react";
import "./Dropdown_menu.css"; // For the styling
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
      <MdOutlineSort /> All Categories <FaChevronDown/>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#alibaba-group">Alibaba Group | 1688</a>
          <a href="#consumer-electronics">Consumer Electronics</a>
          <a href="#food-beverage">Food & Beverage</a>
          <a href="#office-stationery">Office & Stationery</a>
          <a href="#home-garden">Home, Garden & Furniture</a>
          <a href="#baby-center">Baby Center</a>
          <a href="#toys">Toys</a>
          <a href="#tools-home-improvement">Tools & Home Improvement</a>
          <a href="#beauty-fragrances">Beauty & Fragrances</a>
          <a href="#personal-care">Personal Care</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
