import React from "react";
import imageMap from "../../imageMap";
import { useCart } from "../../Kontext/CartContext";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-item">
      <img
        src={imageMap[item.image]}
        alt={item.name}
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">{item.price} SEK</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
    </div>
  );
}
