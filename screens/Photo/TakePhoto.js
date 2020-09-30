import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import Loader from "../../components/Loader";
import constants from "../../constants";

const View = styled.View`
  flex: 1;
`;

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [hasPermissions, setHasPermissions] = useState(false);
  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA); // 권한 요청
      if (status === "granted") {
        setHasPermissions(true);
      }
    } catch (e) {
      console.log(e);
      setHasPermissions(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : hasPermissions ? (
        <Camera
          style={{ width: constants.width, height: constants.height / 2 }}
        />
      ) : null}
    </View>
  );
};
