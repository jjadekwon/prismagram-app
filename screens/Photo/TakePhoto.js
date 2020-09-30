import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import styled from "styled-components";
import { TouchableOpacity, Platform } from "react-native";
import Loader from "../../components/Loader";
import constants from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles";

const View = styled.View`
  flex: 1;
`;

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [hasPermissions, setHasPermissions] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
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

  const toggleType = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
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
          type={cameraType}
          style={{
            justifyContent: "flex-end",
            padding: 15,
            width: constants.width,
            height: constants.height / 2,
          }}
        >
          <TouchableOpacity onPress={toggleType}>
            <Ionicons
              name={
                Platform.OS === "ios"
                  ? "ios-reverse-camera"
                  : "md-reverse-camera"
              }
              size={32}
              color={styles.blackColor}
            />
          </TouchableOpacity>
        </Camera>
      ) : null}
    </View>
  );
};
