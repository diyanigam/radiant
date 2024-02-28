import React from 'react';
import './Navbar.css';
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="search-bar">
        <IoIosSearch size={20}/>
        <input type="text" placeholder/>
      </div>
      <ul className="nav-links">
        <li><a href="/">Categories</a></li>
        <li><a href="/about">Website Builders</a></li>
        <li><a href="/services">Today's deals</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
