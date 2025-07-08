import React from "react";
import "./HeaderFooter.css";
import { useNavigate } from "react-router-dom";


export default function Footer() {

  const navigate = useNavigate();


  return (
    <footer>
      <div>
        <span className="btm-nav-link"onClick={() => navigate("Menu")}>Our Menu</span>
        <span className="btm-nav-link"onClick={() => window.open("https://www.newton.se/", "_blank")}>About Us</span>
        <span className="btm-nav-link"onClick={() => window.open("https://www.newton.se/", "_blank")}>Contact Us</span>
      </div>

      <p style={{ marginTop: "20px", color: "#947D4F", fontSize: "18px" }}>
        © 2025 NUTRI. All rights reserved.
      </p>
    </footer>
  );
}
