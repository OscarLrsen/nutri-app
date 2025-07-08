import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PopularMeals from "./PopularMeals";
import InfoSection from "./InfoSection";
import HeroSektion from "./HeroSektion";



export default function Home() {
  const [meals, setMeals] = useState([]);

//Added const serverIp below to fetch IP from user instead of localhost
const serverIp = import.meta.env.VITE_SERVER_IP;

  useEffect(() => {
    fetch(`http://${serverIp}:3000/products`)
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  const popularMeals = [...meals].sort(() => 0.5 - Math.random()).slice(0, 4);


  return (
    <>
    <Header /> 


    <HeroSektion />


    <PopularMeals popularMeals={popularMeals} />

    <InfoSection />

    <Footer />

    </>
  );
}
