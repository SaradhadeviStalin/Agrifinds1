import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <nav>
        <img src="https://clipground.com/images/farmers-logo-clipart-3.jpg" class="logo"></img><h1>AGRIFINDS</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/schemes">Schemes</Link>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Products
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/products/seeds">Seeds</Link>
              <Link to="/products/tools">Tools</Link>
              <Link to="/products/fertilizers">Fertilizers</Link>
            </div>
          )}
        </div>
        <Link to="/cart">Cart</Link>
        <Link to="/experts">Experts</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
