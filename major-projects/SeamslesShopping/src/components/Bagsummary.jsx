import React from 'react'

const Bagsummary = () => {
  return (
    <div className="bag-summary">
    <div className="bag-details-container">
      <div className="price-header">PRICE DETAILS  </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">
          -₹
        </span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹</span>
      </div>
      <hr />
      <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">₹</span>
      </div>
    </div>
    
    <button className="btn-place-order" onClick=" ">
      <div className="css-xjhrni">PLACE ORDER</div>
    </button>
    </div>
  )
}

export default Bagsummary
