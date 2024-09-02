import { View, Text, StatusBar } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-primary-dark">
      <Text>Profile </Text>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
