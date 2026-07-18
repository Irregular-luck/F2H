import React from 'react';
import './Navbar.css';
import { BsCart4} from "react-icons/bs";
import { PiPlantLight } from "react-icons/pi";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="brand-logo">
          <PiPlantLight className="logo-icon"/>
        </div>
        <span className="brand-name">F2H</span>
      </div>
      <div className="nav-menu">
        <a href="#market" className="menu-item">Market</a>
        <a href="#cart" className="menu-item cart-item">
          <BsCart4 className="cart-icon"/>
        </a>
        <button className="nav-signin-btn">Sign in</button>
      </div>
    </nav>
  );
}