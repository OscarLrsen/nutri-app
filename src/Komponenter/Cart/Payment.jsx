import React, { useState } from "react";
import "./Cart.css";
import { useCart } from "../../Kontext/CartContext";

export default function PaymentOptions() {
  const { clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("swish");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    swish: "",
    cardNumber: "",
  });

  const handleOpen = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order info:", formData);
    clearCart();
    setOrderComplete(true);
    setShowForm(false);
  };

  return (
    <div className="payment-options-container">
      {!orderComplete ? (
        <>
          <button onClick={handleOpen} className="btn btn-yellow">Proceed to Payment</button>

          {showForm && (
            <div className="modal-backdrop">
              <div className="modal-content">
                <h2>Enter Payment Info</h2>

                <div className="payment-method-buttons">
                  <button
                    onClick={() => setPaymentMethod("swish")}
                    className={`btn btn-yellow ${paymentMethod === "swish" ? "active" : ""}`}
                  >
                    Swish
                  </button>
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`btn btn-yellow ${paymentMethod === "card" ? "active" : ""}`}
                  >
                    Credit Card
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="payment-form">
                  <input name="name" placeholder="Full Name" onChange={handleChange} required />
                  <input name="address" placeholder="Address" onChange={handleChange} required />
                  <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                  <input name="phone" placeholder="Phone Number" onChange={handleChange} required />

                  {paymentMethod === "swish" && (
                    <input name="swish" placeholder="Swish Number" onChange={handleChange} required />
                  )}

                  {paymentMethod === "card" && (
                    <input name="cardNumber" placeholder="Card Number" onChange={handleChange} required />
                  )}

                  <button type="submit" className="btn btn-yellow">Betala</button>
                </form>

                <button className="close-btn" onClick={handleClose}>Stäng</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Tack för din beställning!</h2>
      )}
    </div>
  );
}
