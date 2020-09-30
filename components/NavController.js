import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNaviagation from "../navigation/AuthNaviagation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = true;//useIsLoggedIn();
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
