import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import style from "@/src/shared/styles/global-styles";

interface Props {
  btnText: string;
  Icon: React.ReactNode;
  RightIcon?: React.ReactNode;
  onPress: () => void;
}

export default function CardActionBtn({
  btnText,
  Icon,
  RightIcon,
  onPress,
}: Props) {
  return (
    <View className="flex-row items-center justify-between w-full h-14">
      <View className="flex-row items-center" style={style.gapSM}>
        <>{Icon}</>
        <SubText text={btnText} />
      </View>
      {RightIcon && (
        <TouchableOpacity onPress={onPress}>{RightIcon}</TouchableOpacity>
      )}
    </View>
  );
}
