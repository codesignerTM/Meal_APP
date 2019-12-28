import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/colors";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealScreen!</Text>
      <Button
        title="Go to details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  console.log("navigationData", navigationData);
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
