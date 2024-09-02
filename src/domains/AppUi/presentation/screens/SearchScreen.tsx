import { View, Text, StatusBar } from "react-native";
import React from "react";

export default function SearchScreen() {
  return (
    <View className="flex-1 bg-primary-dark">
      <Text>Search</Text>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
