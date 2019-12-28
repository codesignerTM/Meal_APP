import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/colors";
import { Platform } from "react-native";

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

export default createAppContainer(MealsNavigator);
