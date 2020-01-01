import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const indexOfFavMeal = state.favouriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (indexOfFavMeal >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(indexOfFavMeal, 1);
        return {
          ...state,
          favouriteMeals: updatedFavMeals
        };
      } else {
        const mealToAdd = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(mealToAdd)
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
