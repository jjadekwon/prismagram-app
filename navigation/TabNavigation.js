import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Platform } from "react-native";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";
import { stackStyles } from "./config";
import Detail from "../screens/Detail";
import styles from "../styles";
import UserDetail from "../screens/UserDetail";

const Stack = createStackNavigator();
const stackFactory = (name, initialRoute, customConfig) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { ...stackStyles },
        headerBackTitleVisible: false,
        headerTintColor: styles.blackColor,
      }}
    >
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={{
          ...customConfig,
          headerStyle: { ...stackStyles },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Photo",
        }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={({ route }) => ({
          title: route.params.username,
        })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "#FAFAFA" },
      }}
    >
      <Tab.Screen
        name={"Home"}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
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
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            />
          ),
        }}
      >
        {() => stackFactory("Search", Search)}
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
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={Platform.OS === "ios" ? "ios-add" : "md-add"}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Notifications"}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? focused
                    ? "ios-heart"
                    : "ios-heart-empty"
                  : focused
                  ? "md-heart"
                  : "md-heart-empty"
              }
            />
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
          tabBarIcon: ({ focused }) => (
            <NavIcon
              focused={focused}
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
