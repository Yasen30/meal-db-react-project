import React from "react";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strTags,
    idMeal,
  } = props.data;
  console.log(props.data);
  return (
    <div className="shadow-lg bg-white p-4 rounded-lg">
      <div>
        <img src={strMealThumb} alt="" />
      </div>
      <div className="pt-3">
        <h3 className="py-2 text-2xl">Name : {strMeal}</h3>
        <p className="py-2">
          Food Categroie : <span className="text-blue-500"> {strCategory}</span>
        </p>
        <p> {strInstructions.slice(0, 100)}</p>
        <p className="py-2">
          Food tags :
          <span className="text-indigo-700 underline "> {strTags}</span>
        </p>
        <div className="text-center">
          <Link to={`/meal/${idMeal}`}>
            <button className="py-2   p-4 bg-green-500 rounded-xl text-white">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meal;
