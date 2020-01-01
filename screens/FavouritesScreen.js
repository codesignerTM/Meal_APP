import React from "react";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultTextComponent";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouritesScreen = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favourite meals found! Start adding some!</DefaultText>
      </View>
    );
  }

  // const MealId = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return (
    <MealList displayedMeals={favouriteMeals} navigation={props.navigation} />
  );
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavouritesScreen;
