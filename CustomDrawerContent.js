// CustomDrawerContent.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 150,
          backgroundColor: "#f0f0f0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Custom Drawer Header</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}

export default DrawerContent;
