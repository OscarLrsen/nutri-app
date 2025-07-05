import React from "react";
import { useCart } from "../../Kontext/CartContext";
import imageMap from "../../imageMap";

export default function PopularMeals({ popularMeals }) {
  const { addToCart } = useCart();

  return (
    <section className="PopularMealssection">
      <h2>Popular Meals</h2>
      <div className="meals-grid">
        {popularMeals.map((meal) => (
          <div className="meal-card" key={meal.id}>
            <img
              src={imageMap[meal.image]}
              alt={meal.name}
              onError={(e) => (e.target.style.display = "none")}  // Döljer bilden om den inte kan laddas
            />
            <h3>{meal.name}</h3>
            <p>{meal.price} SEK</p>
            <button
              className="btn btn-add"
              onClick={() => addToCart({ ...meal, quantity: 1 })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
