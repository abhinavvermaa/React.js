import React, { useState } from "react";
import "./DeliverTo.css"; // Import the styles
import { MdOutlineLocationOn } from "react-icons/md";

const DeliverTo = () => {
  // State to store selected country and modal state
  const [selectedCountry, setSelectedCountry] = useState("Indonesia");
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle country selection change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="deliver-container">
      {/* Button to open modal */}
      <button onClick={toggleModal} className="deliver-btn">
      <MdOutlineLocationOn /> Deliver to: <span className="country">{selectedCountry}</span> &#9662;
      </button>

      {/* Modal for selecting location */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h3>Choose your delivery location</h3>
            <p>Shipping fees may vary depending on your location</p>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                className="select-box"
                value={selectedCountry} // Bind selected value to state
                onChange={handleCountryChange} // Handle change
              >
                <option value="Indonesia">Indonesia</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            <button className="save-btn" onClick={toggleModal}>
              SAVE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliverTo;
