import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultTextComponent";
import { useEffect, useCallback } from "react";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealIsFavourite = useSelector(state =>
    state.meals.favouriteMeals.some(meal => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavourite });
  }, [currentMealIsFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.ingText}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.ingText}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  //const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavourite = navigationData.navigation.getParam("toggleFav");
  const isFavourite = navigationData.navigation.getParam("isFav");
  //const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    //headerTitle: selectedMeal.title,
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName={isFavourite ? "star" : "star-border"}
          onPress={toggleFavourite}
          title="Favourite"
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  ingText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
