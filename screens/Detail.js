import React from "react";
import styled from "styled-components";

const View = styled.View``;
const Text = styled.Text``;

export default ({route, navigation}) => (
    <View>
        <Text>I should fetch for : {route.params.id}</Text>
    </View>
);