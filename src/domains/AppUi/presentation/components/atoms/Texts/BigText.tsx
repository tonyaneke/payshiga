import { View, Text } from "react-native";
import React from "react";

interface Props {
  text: string;
}

export default function BigText({ text }: Props) {
  return <Text className="font-bold text-[24px] text-white">{text}</Text>;
}
