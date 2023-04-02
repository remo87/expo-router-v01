import React from "react";
import { Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Text>Header</Text>
      <Text>Some other thing</Text>
    </View>
  );
};
