import React, { useState } from 'react';
import { useSelector } from "react-redux";
import './Popup.css';

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const [showPopup, setShowPopup] = useState(false); // Popup state

  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const handlePlaceOrder = () => {
    // Trigger the popup on place order click
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      
      <button className="btn-place-order" onClick={handlePlaceOrder}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>

      {/* Congratulatory Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Congratulations!</h2>
            <p>Your order has been placed successfully.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BagSummary;
