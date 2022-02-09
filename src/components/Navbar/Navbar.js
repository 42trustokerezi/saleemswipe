import React from 'react';
import './navbar.css';

import * as FaIcons from "react-icons/fa"

function Navbar() {
  return <nav className="container">
      <Link to="" className="menu-bars">
        <FaIcons.FaBars/>
      </Link>
      <div className="logo">Logo</div>
      <ul>
          <li><a href="#">App</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Learn More</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
  </nav>;
}

export default Navbar;
