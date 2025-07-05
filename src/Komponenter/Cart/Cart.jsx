import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./Cart.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import PaymentOptions from "./Payment";
import { useCart } from "../../Kontext/CartContext"; // viktigt!

export default function Cart() {
  const { cartItems } = useCart(); // hämta riktiga varor

  return (
    <>
      <Header />

      <main className="cart-container">
        <h1 className="cart-title">Your Order</h1>

        <section>
          <h2 className="cart-section-title">Items</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </section>

        <section>
          <h2 className="cart-section-title">Total</h2>
          <CartTotal />
        </section>

        <section>
          <h2 className="cart-section-title">Payment</h2>
          <PaymentOptions />
        </section>

      </main>

      <Footer />
    </>
  );
}
