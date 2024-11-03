import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginSignup from "./LoginSignup";
import "./Loginsignpu.css";
import React, { useState } from 'react';

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
    const [user, setUser] = useState(null);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="VI_store"
            src="images/VI store_transparent.png"
            alt="VI store"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span onClick={() => setShowLoginSignup(true)}>
                {user ? `${user.username}` : 'Profile Icon'}
            </span>
            {showLoginSignup && (
                <div className="login-modal">
                    <div className="login-modal-content">
                        <LoginSignup setUser={setUser} closeModal={() => setShowLoginSignup(false)} /> {/* Pass setUser and closeModal */}
                        <button className="close-button" onClick={() => setShowLoginSignup(false)}>X</button>
                    </div>
                </div>
            )}

        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
