import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconWrapper from "../../atoms/icons/IconWrapper";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import Body from "@/src/shared/components/atoms/Texts/Body";

interface Props {
  Icon: React.ReactNode;
  title: string;
  caption: string;
}

export default function ActionCard({ Icon, caption, title }: Props) {
  return (
    <TouchableOpacity className="h-40 justify-between w-[48%] p-3 py-4 bg-primary-dark rounded-xl">
      <IconWrapper>{Icon}</IconWrapper>
      <View>
        <SubText text={title} />
        <Body text={caption} />
      </View>
    </TouchableOpacity>
  );
}
