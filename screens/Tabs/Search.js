import React, { useState, useEffect } from "react";
import { ScrollView, RefreshControl } from "react-native";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../components/Loader";
import SquarePhoto from "../../components/SquarePhoto";

const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        id
        url
      }
      likeCount
      commentCount
    }
  }
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(SEARCH, {
    variables: {
      term,
    },
    skip: !shouldFetch,
    fetchPolicy: "network-only"
  });

  const handleOnChange = (text) => {
    setTerm(text);
    setShouldFetch(false);
  };

  const handleOnSubmit = () => {
    setShouldFetch(true);
  };

  useEffect(() =>
    navigation.setOptions({
      headerTitle: () => (
        <SearchBar
          value={term}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
      ),
    })
  );

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch({ variables: { term } });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.searchPost &&
        data.searchPost.map((post) => <SquarePhoto key={post.id} {...post} />)
      )}
    </ScrollView>
  );
};
