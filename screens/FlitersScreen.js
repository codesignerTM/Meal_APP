import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
      />
    </View>
  );
};

const FilterScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactozeFree, setIsLactozeFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        onValueChange={newValue => setIsGlutenFree(newValue)}
        value={isGlutenFree}
      />

      <FilterSwitch
        label="Lactoze-free"
        onValueChange={newValue => setIsLactozeFree(newValue)}
        value={isLactozeFree}
      />

      <FilterSwitch
        label="Vegan"
        onValueChange={newValue => setIsVegan(newValue)}
        value={isVegan}
      />

      <FilterSwitch
        label="Vegetarian"
        onValueChange={newValue => setIsVegetarian(newValue)}
        value={isVegetarian}
      />
    </View>
  );
};

FilterScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
          title="SideDrawer"
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});

export default FilterScreen;
