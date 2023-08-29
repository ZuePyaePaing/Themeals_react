import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import MealCard from "../components/MealCard";

const Home = () => {
  const [meals, setMeal] = useState([]);
  useEffect(() => {
    fetcthMeal();
  }, []);
  const fetcthMeal = async () => {
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
      );
      const { meals } = await api.json();
      setMeal(meals);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meals);
  return (
    <div className=" flex flex-wrap justify-center gap-10 items-center mt-10">
      {meals.map((meal) => {
        return <MealCard key={meal?.idMeal} {...meal} />;
      })}
    </div>
  );
};

export default Home;
