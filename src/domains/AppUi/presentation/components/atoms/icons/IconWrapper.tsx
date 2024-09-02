import { View } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
  large?: boolean;
}

export default function IconWrapper({ children, large }: Props) {
  return (
    <View
      className={`justify-center items-center ${
        large ? "w-20 h-20" : "w-12 h-12"
      } bg-accent-placeholder rounded-full`}
    >
      {children}
    </View>
  );
}
