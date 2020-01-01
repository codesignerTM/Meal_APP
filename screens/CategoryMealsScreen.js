import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const availabeMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availabeMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealScreen;
