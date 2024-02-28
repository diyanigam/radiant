import React from 'react';
import "./DealCard.css";
import img from "./img.svg";

const DealCard = () => {
  return (
    <div className="deal-card">
      <div className="product-image">
        <img src={img} alt="Product" />
      </div>
      <div className="deal-details">
        <h3 className="deal-title">Computer Modern clasic with wix support</h3>
        <p className="deal-price">$99</p>
        <button className="view-deal-btn">View Deal</button>
      </div>
    </div>
  );
}

export default DealCard;
