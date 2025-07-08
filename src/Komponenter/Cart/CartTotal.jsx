import React from "react";
import { useCart } from "../../Kontext/CartContext";

export default function CartTotal() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal + delivery;

  return (
    <div className="cart-total">
      <div className="cart-total-line">
        <span>Subtotal </span>
        <span>{subtotal} SEK</span>
      </div>
      <div className="cart-total-line">
        <span>Delivery </span>
        <span>{delivery} SEK</span>
      </div>
      <div className="cart-total-line cart-total-final">
        <strong>Total </strong>
        <strong>{total} SEK</strong>
      </div>
    </div>
  );
}
