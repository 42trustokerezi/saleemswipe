import React from 'react';
import './navbar.css';

function Navbar() {
  return <nav className="container">
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
