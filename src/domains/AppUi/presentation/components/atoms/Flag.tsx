import { View, Text, Image } from "react-native";
import React from "react";

interface Props {
  name: string;
}

export default function Flag({ name }: Props) {
  return (
    <Image
      source={
        name === "ng"
          ? require(`../../../../../../assets/images/ng.png`)
          : name === "us"
          ? require(`../../../../../../assets/images/usa.png`)
          : require(`../../../../../../assets/images/uk.png`)
      }
      style={{
        width: 50,
        height: 50,
      }}
      className="rounded-full"
      resizeMode="cover"
    />
  );
}
