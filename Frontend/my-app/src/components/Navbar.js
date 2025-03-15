import React from "react";
import "../styles/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SUCURi</div>
      <ul className="nav-links">
        <li>Products</li>
        <li>Features</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      <button className="btn-primary">Immediate Help</button>
    </nav>
  );
};

export default Navbar;
