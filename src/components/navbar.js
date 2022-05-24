import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./button";
import "./navbar.css";
import { FaBitcoin } from "react-icons/fa";
export default function Navbar() {
  const [isMenuClick, setMenuClick] = useState(false);

  const [isShowOnMobile, setShowOnMobile] = useState(window.innerWidth <= 960);

  const handleClick = () => setMenuClick(!isMenuClick);
  const closeMobileMenu = () => {};

  window.addEventListener("resize", () => {
    setShowOnMobile(window.innerWidth <= 960);
  });

  return (
    <>
      <nav className="row navbar">
        <div className="nav-container">
          <Link to="/" className="navbar-logo">
            TRVL
            <FaBitcoin className="home-logo" />
          </Link>
        </div>
        <ul className={isMenuClick ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" onClick={closeMobileMenu} className="nav-links">
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {!isShowOnMobile && <Button buttonStyle="btn-outline">SIGN UP</Button>}
        <div className="menu-icon" onClick={handleClick}>
          {isMenuClick ? <FiX color="#fff" /> : <FiMenu color="#fff" />}
        </div>
      </nav>
    </>
  );
}
