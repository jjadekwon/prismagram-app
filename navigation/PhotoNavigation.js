import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { createStackNavigator } from "@react-navigation/stack";
import { stackStyles } from "./config";
import styles from "../styles";

const Tab = createMaterialTopTabNavigator();
const PhotoTabs = () => (
  <Tab.Navigator
    tabBarPosition="bottom"
    tabBarOptions={{
      indicatorStyle: { backgroundColor: styles.blackColor, marginBottom: 20 },
      style: { paddingBottom: 20, ...stackStyles },
      labelStyle: { fontWeight: "600" },
    }}
  >
    <Tab.Screen name="Take" component={TakePhoto} />
    <Tab.Screen name="Select" component={SelectPhoto} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
export default PhotoNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { ...stackStyles },
      headerTintColor: styles.blackColor,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="PhotoTabs"
      component={PhotoTabs}
      options={{ title: "Choose Photo" }}
    />
    <Stack.Screen
      name="UploadPhoto"
      component={UploadPhoto}
      options={{ title: "Upload" }}
    />
  </Stack.Navigator>
);
