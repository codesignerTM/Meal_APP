import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryScreen = props => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The CategoryScreen!</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
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

export default CategoryScreen;
