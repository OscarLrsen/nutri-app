import React from "react";

export default function Filter({ currentFilter, setFilter }) {
  return (
    <div className="hero-buttons">
      <button
        className={`btn-outline ${currentFilter === "post-workout" ? "active" : ""}`}
        onClick={() => setFilter("post-workout")}
      >
        Post Workout
      </button>
      <button
        className={`btn-outline ${currentFilter === "pre-workout" ? "active" : ""}`}
        onClick={() => setFilter("pre-workout")}
      >
        Pre Workout
      </button>
      <button
        className={`btn-outline ${currentFilter === "drink" ? "active" : ""}`}
        onClick={() => setFilter("drink")}
      >
        Drinks
      </button>
      <button
        className={`btn-outline ${currentFilter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All Choices
      </button>
    </div>
  );
}
