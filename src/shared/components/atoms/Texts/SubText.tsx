import { View, Text } from "react-native";
import React from "react";

interface Props {
  text: string | number;
}

export default function SubText({ text }: Props) {
  return <Text className="font-medium text-white text-lg">{text}</Text>;
}
