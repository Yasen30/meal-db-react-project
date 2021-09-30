import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [value]);

  const handleChange = (e) => {
    const input = e.target.value;
    setValue(input);
  };
  return (
    <div className="container mx-auto my-14">
      <div className="text-center my-5">
        <input
          className="border-2 border-gray-600 w-4/5 rounded-lg"
          onChange={handleChange}
          type="text"
          placeholder="Search Meals Here"
        />
      </div>
      <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} data={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
