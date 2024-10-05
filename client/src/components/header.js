import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="logo-container">
        <img src="images/logo.png" alt="Hotel Logo" className="logo" />
        <h1 className="brand-name">Hotel Navayuga</h1>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          {/* <li><a href="#home">Home</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
