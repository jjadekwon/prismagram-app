import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const [term, setTerm] = useState("");
  const handleOnChange = (text) => {
    setTerm(text);
  };

  const handleOnSubmit = () => {
  };

  navigation.setOptions({
    headerTitle: () => (
      <SearchBar
        value={term}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
    ),
  });

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
