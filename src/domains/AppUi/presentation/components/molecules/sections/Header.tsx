import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Avatar from "@/src/shared/components/atoms/Images/Avatar";
import Title from "@/src/shared/components/atoms/Texts/Title";
import style from "@/src/shared/styles/global-styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title?: string;
  initial: string;
  icon?: boolean;
  color: string;
  calendar?: boolean;
}

export default function Header({
  title,
  icon,
  initial,
  color,
  calendar,
}: Props) {
  return (
    <View className="flex-row w-full h-12 items-center justify-between ">
      <View className="flex-row items-end" style={style.gapSM}>
        <Avatar color={color} initial={initial} />
        {title && <Title title={title} />}
      </View>
      {icon && (
        <TouchableOpacity>
          <Ionicons name="scan" size={30} color="white" />
        </TouchableOpacity>
      )}
      {calendar && (
        <TouchableOpacity>
          <Ionicons name="calendar-clear-outline" size={25} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
