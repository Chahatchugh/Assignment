import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import ProfileScreen from "../screens/profile";
import MainStackNavigator from "./appStackNavigator";

const AppBottomNavigator = createMaterialBottomTabNavigator();
const AllScreenTabNavigator = () => (
    <AppBottomNavigator.Navigator
      initialRouteName="Home"
    >
      <AppBottomNavigator.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="book-open" size={25} color="#fff" />
        }}
      />
      <AppBottomNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="file-alt" size={25} color="#fff" />
        }}
      />
    </AppBottomNavigator.Navigator>
  );
  
  export { AllScreenTabNavigator };
  