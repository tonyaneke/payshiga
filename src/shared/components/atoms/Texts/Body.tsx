import { Text } from "react-native";
import React from "react";

interface Props {
  text: string;
  align?: string;
}

export default function Body({ text, align }: Props) {
  return (
    <Text className={`font-regular text-subText ${align ?? align}`}>
      {text}
    </Text>
  );
}
