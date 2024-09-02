import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconContainer from "../icons/IconContainer";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import Body from "@/src/shared/components/atoms/Texts/Body";
import style from "@/src/shared/styles/global-styles";

interface Props {
  title: string;
  caption: string;
  Icon: React.ReactNode;
  RightIcon: React.ReactNode;
}

export default function MoreBtn({ Icon, RightIcon, caption, title }: Props) {
  return (
    <TouchableOpacity className="flex-row justify-between items-center">
      <View className="flex-row items-center" style={style.gapSM}>
        <IconContainer>{Icon}</IconContainer>
        <View>
          <SubText text={title} />
          <Body text={caption} />
        </View>
      </View>
      <TouchableOpacity>{RightIcon}</TouchableOpacity>
    </TouchableOpacity>
  );
}
