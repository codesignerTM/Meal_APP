import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealScreen = props => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
