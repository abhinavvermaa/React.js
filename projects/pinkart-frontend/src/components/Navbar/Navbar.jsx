import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaBars,FaHome, FaUserCircle, FaSignOutAlt, FaBoxOpen ,FaStore , FaBuilding} from 'react-icons/fa';
import { BiSolidOffer } from "react-icons/bi";
import { PiClockCountdownFill } from "react-icons/pi";
import { TfiBag } from "react-icons/tfi";
import { PiDeviceMobileLight } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiOfficeChairLight } from "react-icons/pi";
import './Navbar.css';
import { StoreContext } from '../../Context/StoreContext';
import Dropdown from './dropdowns/Dropdown_menu';
import DeliverTo from './dropdowns/Deliver_to';
import pinkart_logo from '../../assets/pinkart.png';
const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const bottomNav = useRef()
  const overlay   = useRef()
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };
  const  closeBottomNav = ()=>{
    bottomNav.current.classList.remove("active");
    overlay.current.classList.remove("active");
  }
  const toggleBottomNav=()=>{
    bottomNav.current.classList.toggle("active");
    overlay.current.classList.toggle("active");
  }
  return (
    <div className='navbar'>
      {/* Top bar with logo, delivery, language, and search */}
      <div className='navbar-top'>
        <div className='navbar-top-right'>
        <Link to='/' style={{padding: '10px'}}>
        <div className='logo'><img className='logo-img' src={pinkart_logo} alt="pinkart logo" />
        <div className="logo-text"></div> </div>
        </Link>
          <div className='navbar-delivery'>
          <DeliverTo></DeliverTo>
          </div>
          <div className='navbar-search'>
            <div className="drpdwn">
            <Dropdown></Dropdown></div>
            <input type="text" placeholder="Search Pinkart" />
            <button className='search-icon'><FaSearch /></button>
          </div>
          <div className="navbar-profile-actions">
            {!token ? (
              <button onClick={() => setShowLogin(true)}>
                <div className='user-circle'><FaUserCircle /></div> <span className="login-text">Log in / Register</span>
              </button>
            ) : (
              <div className='navbar-profile'>
                <div className='user-circle'><FaUserCircle /></div>
                
                <ul className='navbar-profile-dropdown'>
                  <li onClick={() => navigate('/myorders')}>
                    <FaBoxOpen /> <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <FaSignOutAlt /> <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to='/cart' className='navbar-cart-icon'>
            <FaShoppingCart />
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          </Link>
        </div>
      </div>

      
      {/*toggle buttons for small screens bottom navbar */}
      <section className='tooglebar_bottom'>
       
      <Link to={"/"} className='link' ><FaHome  onClick={closeBottomNav} /></Link>
        <button 
        // function for toggling bottom nav on mobile devices
        onClick={toggleBottomNav} ><FaBars /> All Categories</button>
      <Link to='/cart' className='link' >
            <FaShoppingCart onClick={closeBottomNav} />
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          </Link>
      </section>


      {/* Bottom bar with categories */}
      <div ref={overlay} onClick={closeBottomNav} id='overlay'></div>
      <section ref={bottomNav} className='navbar-bottom'>
        <article onClick={closeBottomNav} className='navbar-categories'>
        <div className='button-allcat'><Dropdown></Dropdown></div>
          <Link to='#'><PiDeviceMobileLight /> Consumer Electronics</Link>
          <Link to='#'><IoFastFoodOutline />Food & Beverage</Link>
          <Link to='#'><PiOfficeChairLight /> Office & Stationery</Link>
        </article>
        <article onClick={closeBottomNav}  className='navbar-links'>
          
          <Link to='#'><BiSolidOffer /> Deals</Link>
          <Link to='#'><PiClockCountdownFill /> Express</Link>
          <Link to='#'><TfiBag /> Enterprise</Link>
          <button>Become a Seller</button>
        </article>
      </section>
    </div>
  );
};

export default Navbar;