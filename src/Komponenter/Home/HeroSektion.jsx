import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function HeroSektion() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>FOOD DELIVERED<br />WITH PURPOSE.</h1>
        <div className="hero-buttons">
          <button className="btn-outline" onClick={() => navigate("/Menu")}>
            See our Menu
          </button>
        </div>
      </div>
    </section>
  );
}

