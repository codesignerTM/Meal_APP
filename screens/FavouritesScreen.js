import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouritesScreen = props => {
  const MealId = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList displayedMeals={MealId} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Your favourites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Main nav bar"
          iconName="menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavouritesScreen;
