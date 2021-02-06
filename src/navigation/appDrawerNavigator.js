import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from "../screens/setting";
import { AllScreenTabNavigator } from "./appTabNavigator";


const Drawer = createDrawerNavigator();
const AllDrawerNavigation = () => (
    <Drawer.Navigator initialRouteName='Profile'>
        <Drawer.Screen component={AllScreenTabNavigator} name='Home' />
        <Drawer.Screen component={SettingScreen} name='Settings' />
    </Drawer.Navigator>
)

export default AllDrawerNavigation;