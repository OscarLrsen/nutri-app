import React, { useState } from "react";
import "./Headerfooter.css";

export default function Header() {


const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(prev => !prev);
};

  return (
    <header className="nutri-header">
      {/* Menyn som skjuts in */}
      <div className={`off-screen-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={toggleMenu}>Home</li>
          <li onClick={toggleMenu}>About</li>
          <li onClick={toggleMenu}>Contact</li>
        </ul>
      </div>

      {/* Hamburgerknapp */}
      <nav className="menu">
        <div
          className={`ham-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Logotyp */}
      <div className="logo">
        <a href="/">
          <img src="src\Bilder\NUTRIVIT.jpeg" alt="NUTRI" />
        </a>
      </div>

      {/* Login-länk */}
      <div className="login">
        <a href="/login">Logga in</a>
      </div>
    </header>
  );
}
