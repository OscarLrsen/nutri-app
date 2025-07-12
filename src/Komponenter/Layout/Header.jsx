import React from "react";
import { useNavigate } from "react-router-dom";
import "./Headerfooter.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header">
        <div className="header-left" onClick={() => console.log("öppna meny")}>
          <span className="material-icons">menu</span>
        </div>

        <div className="header-center" onClick={() => navigate("/")}>
          Nutri
        </div>

        <div className="header-right">
          <span className="login-text" onClick={() => navigate("/login")}>
            Logga in
          </span>
        </div>
      </div>

    </header>
  );
}
