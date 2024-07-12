import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <button className="btn">
      <a href={meal.strYoutube}>Voir la video</a>
      </button>
    </div>
  );
};

export default Card;