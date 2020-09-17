import React from "react";
import { View } from "react-native";
import { userIsLoggedIn } from "./AuthContext";
import AuthNaviagation from "../navigation/AuthNaviagation";
import TabNavigation from "../navigation/TabNavigation";

export default () => {
  const isLoggedIn = true; //userIsLoggedIn();
  return (
    <View style={{ flex: "1" }}>
      {isLoggedIn ? (
        <TabNavigation />
      ) : (
        <AuthNaviagation />
      )}
    </View>
  );
};
