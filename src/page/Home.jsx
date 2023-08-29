import React, { useEffect, useState } from "react";

import MealCard from "../components/MealCard";

const Home = () => {
  const [meals, setMeal] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setLoading(true)
    } catch (error) {
      console.log(error);
    }
  };

  if(!loading){
    return(<div className=" w-full h-screen flex justify-center items-center">
      <h1 className=" font-semibold text-yellow-500 text-3xl">Loading...</h1>
    </div>)
  }
  return (
    <div className=" flex flex-wrap justify-center gap-10 items-center mt-10">
      {meals.map((meal) => {
        return <MealCard key={meal?.idMeal} {...meal} />;
      })}
    </div>
  );
};

export default Home;
