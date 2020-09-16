import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { userIsLoggedIn, userLogIn, userLogOut } from "./AuthContext";

export default () => {
  const isLoggedIn = userIsLoggedIn();
  const logIn = userLogIn();
  const logOut = userLogOut();
  return (
    <View style={{ flex: "1", justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logIn}>
          <Text>Log In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
