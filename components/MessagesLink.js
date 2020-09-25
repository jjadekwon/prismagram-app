import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import NavIcon from "../components/NavIcon";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

const Container = styled.TouchableOpacity`
  padding-right: 20px;
`;

export default () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("MessageNavigation")}>
      <NavIcon
        name={Platform.os === "ios" ? "ios-paper-plane" : "md-paper-plane"}
      />
    </Container>
  );
};
