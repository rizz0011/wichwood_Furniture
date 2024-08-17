import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <div className="contact-item">
          <MdEmail className="contact-icon" />
          <p>wichwoodsofa@gmail.com</p>
        </div>
        <div className="contact-item">
          <MdPhone className="contact-icon" />
          <p>+91 8088941575</p>
        </div>
        <div className="contact-item">
          {/* <MdLocationOn className="contact-icon" /> */}
          <p>38/8, Bandepalya, HSR terniti apartment rood Garvebhavi Palya, Bengaluru, Karnataka 560068</p>
        </div>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61564378653859&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/wich_wood" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} wichWood Sofa Manufactur. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
