import React,{ useState } from 'react';
import "./ProductCard.css";
import img from "./img.svg";
import { IoIosArrowDown} from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt="Product" />
      </div>
      <div className="product-details">
        <div className="product-info">
          <p className="product-title">WixPro 72-Inch Responsive Website Builder</p>
          <p className="product-description">SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
          <div className="discount-box">13% off </div>
          <p className="highlights">Main highlights:</p>
          <p className="more">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
          <button className="show-more-btn">Show more <IoIosArrowDown size={15} style={{verticalAlign: "-0.25em"}}/> </button>
        </div>
        <div className="product-rating">
          <div className="rating-box">
            <span className="rating">4.5</span>
            <span style={{color:"#1A548F", fontSize:"0.8rem"}}>Excellent</span>
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <button className="view-button">View</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;