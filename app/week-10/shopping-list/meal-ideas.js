import React, { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return [];
  }
}

function MealIdeasComponent({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const cleanedIngredient = ingredient
      .split(",")[0]
      .trim()
      .replace(
        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{E000}-\u{F8FF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
        ""
      ); // Remove emojis

    const mealIdeas = await fetchMealIdeas(cleanedIngredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 ml-16 p-4 text-white">
        Meal Ideas
      </h1>
      <ul className="ml-20">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100px", height: "100px" }}
              />
            </li>
          ))
        ) : (
          <p>No meal ideas available for this ingredient.</p>
        )}
      </ul>
    </div>
  );
}

export default MealIdeasComponent;