import React from 'react';
import '../styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';


const HeaderMain = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear authentication token
    navigate('/', { replace: true }); // Navigate to login page
  };
  return (
    <>
      <div style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/2690549.jpg")', backgroundSize: 'cover' }}>
        <header className="header">
          <div className="logo-container">
            <img src="images/logo.png" alt="Hotel Logo" className="logo" />
            <h1 className="brand-name">Hotel Navayuga</h1>
          </div>
          <nav className="menu">
            <ul className="menu-list">
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
              <li><Link to="/food-court">Food Court</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default HeaderMain;
