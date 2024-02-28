import React from 'react';
import './Footer.css';


const Footer = () => {
  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Japan",
    "China",
    "India",
    "Brazil",
    "Mexico"
  ];
  
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>CATEGORIES</h3>
          <ul>
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
            
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACT</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
          </div>
        <div className="footer-column">
          <h3></h3>
          <select>
            {countries.map((country, index) => (
              <option key={index}>{country}</option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
