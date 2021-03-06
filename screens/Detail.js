import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
import Post from "../components/Post";

const POST_DETAIL = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

const View = styled.View``;
const Text = styled.Text``;

export default ({ route, navigation }) => {
  const { loading, data } = useQuery(POST_DETAIL, {
    variables: {
      id: route.params.id,
    },
  });

  return (
    <ScrollView>
      {loading ? <Loader /> : data && data.seeFullPost && <Post {...data.seeFullPost} />}
    </ScrollView>
  );
};
