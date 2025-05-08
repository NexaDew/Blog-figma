// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}

export default Navbar;
