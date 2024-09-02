import { View, Text } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function IconContainer({ children }: Props) {
  return (
    <View className="h-10 w-10 bg-accent-primary justify-center items-center rounded-lg">
      {children}
    </View>
  );
}
