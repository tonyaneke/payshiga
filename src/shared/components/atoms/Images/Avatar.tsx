import { Text, View } from "react-native";
import React from "react";

interface Props {
  initial?: string;
  Icon?: React.ReactNode;
  color: string;
  hasIcon?: boolean;
}

export default function Avatar({ initial, color, hasIcon, Icon }: Props) {
  return (
    <View
      className={`rounded-full justify-center items-center h-12 w-12`}
      style={{
        backgroundColor: color,
      }}
    >
      {!hasIcon && (
        <Text className="font-bold text-xl text-center">{initial}</Text>
      )}
      {hasIcon && <>{Icon}</>}
    </View>
  );
}
