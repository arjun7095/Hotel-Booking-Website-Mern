import React from "react";
import "../styles/Footer.css"; // Assuming you'll have some custom styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Arjun's corps. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
