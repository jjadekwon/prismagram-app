import React, { useState } from "react";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../hooks/useInput";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import { LOG_IN } from "../Auth/AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ route, navigation }) => {
  const emailInput = useInput(
    route.params && route.params.email
      ? route.params.email
      : ""
  );
  const [loading, setLoading] = useState(false);
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: {
      email: emailInput.value,
    },
  });
  const handleLogin = async () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }

    try {
      setLoading(true);
      const {
        data: { requestSecret },
      } = await requestSecretMutation[0]();
      if (requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm", { email: value });
        return;
      } else {
        Alert.alert("Account not found");
        navigation.navigate("Signup", { email: value });
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Can't log in now");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleLogin} text="Log In" />
      </View>
    </TouchableWithoutFeedback>
  );
};
