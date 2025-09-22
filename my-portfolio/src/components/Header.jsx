import React, { useState } from "react";
import "../styles/header.css";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaEnvelope,
  FaList,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import profileImg from "../assets/img1.jpg"; // replace with your img1

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu after clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`menu-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="profile">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <h2>Dipesh Thapa Magar</h2>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="menu">
          <ul>
            <li><a href="#hero" onClick={handleLinkClick}><FaHome /> Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}><FaUser /> About</a></li>
            <li><a href="#resume" onClick={handleLinkClick}><FaFileAlt /> Resume</a></li>
            <li><a href="#portfolio" onClick={handleLinkClick}><FaBriefcase /> Portfolio</a></li>
            <li><a href="#services" onClick={handleLinkClick}><FaList /> Services</a></li>
            <li><a href="#contact" onClick={handleLinkClick}><FaEnvelope /> Contact</a></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
