import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear authentication token
    navigate('/', { replace: true }); // Navigate to login page
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/bookings">Your Bookings</Link></li>
        <li><Link to="/profile">Your Profile</Link></li>
        <li><Link to="/food-court">Food Court</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
