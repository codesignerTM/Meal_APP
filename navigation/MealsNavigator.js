import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FlitersScreen";

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff"
  },
  headerTitleStyle: { fontFamily: "open-sans-bold" },
  headerBackTitleStyle: { fontFamily: "open-sans" },

  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor
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
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavigationOptions
  }
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
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavigationOptions
  }
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
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
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
      tabBarColor: Colors.secondaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favourites</Text>
        ) : (
          "Favourites"
        )
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
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Colors.secondaryColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    //navigationOptions: {
    //  drawerLabel: "FILTY"
    //},
    defaultNavigationOptions: defaultStackNavigationOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: "Filters"
      }
    }
  },
  {
    overlayColor: "black",
    contentOptions: {
      activeTintColor: Colors.secondaryColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
