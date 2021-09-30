import React from "react";

const MealDetail = (props) => {
  const {
    strMeal,
    strArea,
    strInstructions,
    strTags,
    strMealThumb,
    strCategory,
  } = props.data;
  return (
    <div className="shadow-lg text-center container mx-auto p-4">
      <div>
        <img className="w-6/12 mx-auto" src={strMealThumb} alt="" />
      </div>
      <div className="pt-3">
        <h3 className="py-2 text-2xl">Name : {strMeal}</h3>
        <p>Food Area : {strArea}</p>
        <p className="py-2">
          Food Categroie : <span className="text-blue-500"> {strCategory}</span>
        </p>
        <p className="py-2">Food tags :{strTags}</p>
        <p> {strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetail;
