import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Expo router</Text>
      <Link href={"/blog/123"}>Some blog</Link>
      <Link href={"/blog/settings"}>blog settings</Link>
    </View>
  );
};

export default index;
