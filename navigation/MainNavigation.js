import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"PhotoNavigation"} component={PhotoNavigation} />
        <Stack.Screen name={"TabNavigation"} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
