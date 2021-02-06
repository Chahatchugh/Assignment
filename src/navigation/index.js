import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import AllDrawerNavigation from "./appDrawerNavigator";


const RootNavigator = () => (
  <NavigationContainer>
    <AllDrawerNavigation/>
  </NavigationContainer>
);
export default RootNavigator;