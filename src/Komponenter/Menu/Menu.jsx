import React, { useEffect, useState } from "react";
import "./Menu.css";
import Filter from "./Filter";
import { useCart } from "../../Kontext/CartContext";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import imageMap from "../../imageMap";

export default function Menu() {
  const [meals, setMeals] = useState([]); // Lagrar alla måltider från databasen
  const [filter, setFilter] = useState("all"); 
  const { addToCart } = useCart(); // Använder global CartContext för att lägga till i kundvagn

  // Hämta menyn från json-server vid första renderingen
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  // Filtrerar måltider utifrån vald kategori (t.ex. pre/post workout, drink)
  const filteredMeals = meals.filter((meal) => {
    if (filter === "all") return true;
    if (Array.isArray(meal.type)) return meal.type.includes(filter);
    return meal.type === filter;
  });

  return (
    <>
      <Header /> {/* Navigationskomponent */}

      <section className="hero">
        <div className="hero-text">
          <h1>Our Menu</h1>
          <Filter currentFilter={filter} setFilter={setFilter} /> {/* Visar filterknappar */}
        </div>
      </section>

      <section className="PopularMealssection">
        <div className="meals-grid">
          {filteredMeals.map((meal) => (
            <div className="meal-card" key={meal.id}>
              {/* Bild från imageMap baserat på meal.image */}
              <img
                src={imageMap[meal.image]}
                alt={meal.name}
                onError={(e) => (e.target.style.display = "none")} // Tar bort bilden om den saknas
              />
              <h3>{meal.name}</h3>
              <p>{meal.price} SEK</p>
              <button
                className="btn btn-yellow"
                onClick={() => addToCart({ ...meal, quantity: 1 })} // Lägger till 1 st i varukorgen
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer /> {/* Footer med info */}
    </>
  );
}
