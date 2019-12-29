import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

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
  {
    //mode: "modal",
    //initialRouteName: "MealDetail",
    defaultNavigationOptions: {
      //if default navigation
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="md-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        tabBarLabel: "Favourites :)",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-heart" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondaryColor
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
