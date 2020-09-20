import React from "react";
import { View } from "react-native";
import { userIsLoggedIn } from "./AuthContext";
import AuthNaviagation from "../navigation/AuthNaviagation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = userIsLoggedIn();
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <MainNavigation />
      ) : (
        <AuthNaviagation />
      )}
    </View>
  );
};
