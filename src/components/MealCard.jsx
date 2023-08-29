import React from "react";
import { Link } from "react-router-dom";

const MealCard = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <Link to={`/detail/${idMeal}`}>
      <div className=" flex flex-col items-center py-2 gap-5 w-full md:w-[350px] m-2 shadow-lg  rounded-lg group">
        <div className="w-[250px] h-[250px] stroke-orange-800 stroke-5 rounded-full shadow-lg overflow-hidden duration-200 bg-red-500 group-hover:-translate-y-4">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <h1 className=" self-start text-[16px] font-medium px-2">{strMeal}</h1>
      </div>
    </Link>
  );
};

export default MealCard;
