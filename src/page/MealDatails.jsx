import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDatails = () => {
  const [dMeal, setdMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);

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

if(!loading){
  return(<div className=" flex justify-center items-center w-full h-screen">
    <h1 className=" font-semibold text-yellow-500 text-4xl">Loading...</h1>
  </div>)
}
  return (
    <div className="  shadow-lg  gap-3 h-auto w-[700px] mx-auto mt-10 bg-gray-200  overflow-auto">
     <div className=" flex md:flex-row flex-col">
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
        <div className="bg-gray-900 h-1 mt-5" />
        <div>
          <h3 className='font-semibold text-xl mb-2'>Instruction</h3>
          <p className="text-sm leading-4">{dMeal.strInstructions}</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default MealDatails;
