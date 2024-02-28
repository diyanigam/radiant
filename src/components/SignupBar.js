import React from 'react';
import "./SignupBar.css";

const SignupBar = () => {
  return (
    <div className="signup-bar">
      <p className="signup-text">Sign up and get exclusive <br/> special deals</p>
      <div className="container">
        <input type="email" placeholder="Enter your email" className="signup-input" />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default SignupBar;