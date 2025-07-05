import React from "react";

export default function MealCard({ meal, image }) {
  return (
    <div className="meal-card">
      <img src={image} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p>{meal.price} SEK</p>
      <button className="btn btn-yellow">Add to Cart</button>
    </div>
  );
}
