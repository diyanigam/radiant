// Main.js
import React from 'react';
import DateDropdown from './DateDropdown';
import Breadcrumb from './Breadcrumb';
import ProductCard from './ProductCard';
import SignupBar from './SignupBar';
import DealCard from './DealCard';
import './Main.css';

const Main = () => {
  return (
    <main>
      <h1 style = {{fontWeight:"400", fontSize:"2.5rem", marginTop:"3vh"}}>Best Website builders in the US</h1>
      <div className="header">
        <DateDropdown />
        <Breadcrumb />
      </div>
      <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <h2 style = {{fontWeight:"400", fontSize:"1.5rem"}}>Related deals you might like for</h2>
      <div className="deal-cards">
        <DealCard />
        <DealCard />
        <DealCard />
      </div>
      <SignupBar />
    </main>
  );
}

export default Main;
