import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name={"TabNavigation"} component={TabNavigation} />
        <Stack.Screen name={"PhotoNavigation"} component={PhotoNavigation} />
        <Stack.Screen name={"MessageNavigation"} component={MessageNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
