import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";

const SearchMeal = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    searchMeal();
  }, []);
  console.log(meals);

  const searchMeal = async () => {
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      const { meals } = await api.json();
      setMeals(meals);
    } catch (error) {
      console.log(error);
    }
  };
  return <div className=" flex flex-wrap justify-center gap-10 items-center mt-10">
    {meals.map((meal) => {
        return <MealCard key={meal?.idMeal} {...meal} />;
      })}
  </div>;
};

export default SearchMeal;
