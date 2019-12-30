import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = props => {
  const MealId = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList displayedMeals={MealId} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your favourites"
};

export default FavouritesScreen;
