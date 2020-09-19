import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={Home} />
      <Tab.Screen name={"Search"} component={Search} />
      <Tab.Screen
        name={"Add"}
        component={View}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          }
        })}
      />
      <Tab.Screen name={"Notifications"} component={Notifications} />
      <Tab.Screen name={"Profile"} component={Profile} />
    </Tab.Navigator>
  );
};
