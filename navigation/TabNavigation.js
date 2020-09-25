import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Platform } from "react-native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";

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
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name={"Home"}
        options={{
          tabBarIcon: () => (
            <NavIcon name={Platform.OS === "ios" ? "ios-home" : "md-home"} />
          ),
        }}
      >
        {() =>
          stackFactory("Home", Home, {
            headerRight: () => <MessagesLink />,
            headerTitle: <NavIcon name="logo-instagram" size={36} />,
          })
        }
      </Tab.Screen>
      <Tab.Screen
        name={"Search"}
        options={{
          tabBarIcon: () => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          ),
        }}
      >
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
        options={{
          tabBarIcon: () => (
            <NavIcon name={Platform.OS === "ios" ? "ios-add" : "md-add"} />
          ),
        }}
      />
      <Tab.Screen
        name={"Notifications"}
        options={{
          tabBarIcon: () => (
            <NavIcon name={Platform.OS === "ios" ? "ios-heart" : "md-heart"} />
          ),
        }}
      >
        {() =>
          stackFactory("Notifications", Notifications, {
            title: "Notifications",
          })
        }
      </Tab.Screen>
      <Tab.Screen
        name={"Profile"}
        options={{
          tabBarIcon: () => (
            <NavIcon
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            />
          ),
        }}
      >
        {() => stackFactory("Profile", Profile, { title: "Profile" })}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
