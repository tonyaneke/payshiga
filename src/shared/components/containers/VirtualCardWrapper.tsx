import { View, Text } from "react-native";
import React from "react";
import style from "../../styles/global-styles";
import VirtualCard from "../molecules/Cards/VirtualCard";
import Body from "../atoms/Texts/Body";
import SubText from "../atoms/Texts/SubText";

export default function VirtualCardWrap() {
  return (
    <View
      className="flex-row p-3 items-center  h-24 w-full bg-primary-dark border-2 border-accent-inputField rounded-lg"
      style={style.gapSM}
    >
      <VirtualCard />
      <View>
        <Body text="For" />
        <SubText text="Virtual Card" />
      </View>
    </View>
  );
}
