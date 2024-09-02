import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/build/Feather";

export default function CloseBtn() {
  const close = () => router.back();
  return (
    <TouchableOpacity
      onPress={close}
      className="w-10 h-10 justify-center items-center"
    >
      <Feather name="x" size={24} color="white" />
    </TouchableOpacity>
  );
}
