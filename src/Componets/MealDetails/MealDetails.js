import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import MealDetail from "../MealDetail/MealDetail";

const MealDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.meals));
  }, []);
  console.log(details);
  return (
    <div>
      {details.map((details) => (
        <MealDetail key={details.idMeal} data={details}></MealDetail>
      ))}
    </div>
  );
};

export default MealDetails;
