import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDatails = () => {
  const [dMeal, setdMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);

  console.log(dMeal, loading);

  const fetchDetail = async () => {
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const { meals } = await api.json();
      setdMeal(meals[0]);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex md:flex-row shadow-lg  gap-3 h-[450px] w-[700px] mx-auto mt-10 bg-gray-200">
      <img src={dMeal?.strMealThumb} alt="" className="w-1/2 object-fill" />
      <div className="w-1/2 p-4 ">
        <h2 className=" font-semibold text-[25px] leading-7 mb-2">
          {dMeal.strMeal}
        </h2>
        <p className="font-semibold text-[18px] leading-5 mb-5">
          {dMeal.strArea}
        </p>
        <div className="flex justify-between">
          <span className="font-semibold bg-yellow-500 px-2 py-1 rounded-lg text-white text-[18px] leading-5">
            {dMeal.strCategory}
          </span>
          <a href={dMeal?.strYoutube} className=" cursor-pointer bg-red-500 select-none? text-white px-2 py-1 rounded-lg">Youtube</a>
        </div>
        <div className="bg-gray-900 h-1 my-5" />
        <div>
          <h3>Instruction</h3>
          <p className="text-sm leading-4">{dMeal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default MealDatails;
