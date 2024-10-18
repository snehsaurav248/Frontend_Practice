import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>MyLogo</h2>
        </div>
          <span>
        <ul className="nav-links">
            <li href="./" className="nav-link">
              Home
            </li>
            <li href="./About.js" className="nav-link">
              About
            </li>
            <li href="./Contact.js" className="nav-link">
              Contact
            </li>
        </ul>
          </span>
      </nav>
    </div>
  );
}
export default Navbar;
