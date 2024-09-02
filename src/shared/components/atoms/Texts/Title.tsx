import { Text } from "react-native";
import React from "react";

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return <Text className="text-2xl font-bold text-white">{title}</Text>;
}
