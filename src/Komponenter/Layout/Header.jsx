import React from "react";
import "./Headerfooter.css";

export default function Header() {

  return (
    <header className="nutri-header">
      <div className="menu">
        <button className="menu-btn">☰ Meny</button>
      </div>

      <div className="logo">
        <a href="/">
          <img src="src\Bilder\NUTRIVIT.jpeg" alt="NUTRI" />
        </a>
      </div>

      <div className="login">
        <a href="/login">Logga in</a>
      </div>
    </header>
  );
}
