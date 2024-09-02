import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import Ionicons from "@expo/vector-icons/build/Ionicons";

interface Props {
  status: string;
  initial: string;
}

export default function IconHelper({ status, initial }: Props) {
  switch (status) {
    case "topup":
      return <AntDesign name="arrowdown" size={24} color="white" />;
    case "reversal":
      return <MaterialIcons name="refresh" size={24} color="white" />;
    case "sent":
      return <AntDesign name="arrowup" size={24} color="white" />;
    case "declined":
      return <Ionicons name="warning-outline" size={24} color="#FF453A" />;
    case "card":
      return <Ionicons name="card-outline" size={24} color="#999999" />;
    default:
      return <Text className="font-bold text-xl text-center">{initial}</Text>;
  }
}
