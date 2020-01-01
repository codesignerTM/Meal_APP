import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals";

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
    case SET_FILTERS: {
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactozeFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    }
    default:
      return state;
  }
};

export default mealsReducer;
