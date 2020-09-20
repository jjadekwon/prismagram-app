import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import MessagesLink from "../components/MessagesLink";

const Stack = createStackNavigator();
const stackFactory = (name, initialRoute, customConfig) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{ ...customConfig }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"}>
        {() =>
          stackFactory("Home", Home, {
            title: "Home",
            headerRight: () => <MessagesLink />,
          })
        }
      </Tab.Screen>
      <Tab.Screen name={"Search"}>
        {() => stackFactory("Search", Search, { title: "Search" })}
      </Tab.Screen>
      <Tab.Screen
        name={"Add"}
        component={View}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          },
        })}
      />
      <Tab.Screen name={"Notifications"}>
        {() =>
          stackFactory("Notifications", Notifications, {
            title: "Notifications",
          })
        }
      </Tab.Screen>
      <Tab.Screen name={"Profile"}>
        {() => stackFactory("Profile", Profile, { title: "Profile" })}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
