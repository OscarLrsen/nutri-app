import React from "react";
import "./HeaderFooter.css";
import { useCart } from "../../Kontext/CartContext";
import CartButton from "../Cart/CartButton";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <header>
      {/* Klickbar logotyp */}
      <div className="topLogo" onClick={() => navigate("/")}>
        NUTRI
      </div>

      <div className="nav-buttons">
        <nav>
          <span className="nav-link" onClick={() => navigate("/")}>Home</span>
          <span className="nav-link"onClick={() => window.open("https://www.newton.se/", "_blank")}>About Us</span>
          <span className="nav-link"onClick={() => window.open("https://www.newton.se/", "_blank")}>Contact Us</span>
          <span className="btn-nav-login"onClick={() => navigate("/Login")}>Login</span>
        </nav>

      <button 
        className="btn btn-yellow" 
        onClick={() => window.open("https://www.google.com/maps/place/Norra+Bulltoftavägen+65C,+212+43+Malmö", "_blank")}
      >
        Find Us
      </button>



        <CartButton totalItems={totalQuantity} />
      </div>
    </header>
  );
}
