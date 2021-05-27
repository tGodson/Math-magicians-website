import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav>
      <NavLink exact className="navlink" activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" activeClassName="active" to="/calculator">
        Calculator
      </NavLink>
      <NavLink className="navlink" activeClassName="active" to="/quote">
        Quote
      </NavLink>
    </nav>
  );
};

export default Header;