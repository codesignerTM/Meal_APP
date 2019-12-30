import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FlitersScreen";

const defaultStackNavigationOptions = {
  //mode: "modal",
  //initialRouteName: "MealDetail",
  defaultNavigationOptions: {
    //if default navigation
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        // if navigation header should vary from based on screens
        headerTitle: "Meal Categories",
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "#fff"
        },
        headerTintColor:
          Platform.OS === "android" ? "#fff" : Colors.primaryColor
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  defaultStackNavigationOptions
);

const FavouritesNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  defaultStackNavigationOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favourites: {
    screen: FavouritesNavigator,
    navigationOptions: {
      tabBarLabel: "Favourites :)",
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-heart" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.secondaryColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true
        /* barStyle: {  
          backgroundColor: Colors.primaryColor   //if shifting is false that is how to change background color
        } */
      })
    : createBottomTabNavigator({
        tabScreenConfig,
        tabBarOptions: {
          activeTintColor: Colors.secondaryColor
        }
      });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFav: MealsFavTabNavigator,
  Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
