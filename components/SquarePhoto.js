import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const SquarePhoto = ({ files = [], id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { id })}>
      <Image
        style={{ width: constants.width / 3, height: constants.height / 6 }}
        source={{ uri: files[0].url }}
      />
    </TouchableOpacity>
  );
};

SquarePhoto.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default SquarePhoto;
