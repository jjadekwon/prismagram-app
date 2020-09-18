import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const Tab = createMaterialTopTabNavigator();

export default PhotoNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"SelectPhoto"} component={SelectPhoto} />
      <Tab.Screen name={"TakePhoto"} component={TakePhoto} />
      <Tab.Screen name={"UploadPhoto"} component={UploadPhoto} />
    </Tab.Navigator>
  );
};
