import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { userIsLoggedIn, userLogIn, userLogOut } from "./AuthContext";
import AuthNaviagation from "../navigation/AuthNaviagation";

export default () => {
  const isLoggedIn = userIsLoggedIn();
  const logIn = userLogIn();
  const logOut = userLogOut();
  return (
    <View style={{ flex: "1" }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <AuthNaviagation />
      )}
    </View>
  );
};
