// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Header({ links }) {
  return (
    <header className="navbar">
      <nav>
        {links.map((linkObj, index) => (
          <Link key={index} to={linkObj.path}>
            {linkObj.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
