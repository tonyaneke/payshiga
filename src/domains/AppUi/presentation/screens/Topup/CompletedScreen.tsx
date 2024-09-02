import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import style from "@/src/shared/styles/global-styles";
import Animation from "@/src/shared/components/molecules/Animation";
import BigText from "../../components/atoms/Texts/BigText";
import Body from "@/src/shared/components/atoms/Texts/Body";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import { router } from "expo-router";
import useStore from "@/src/core/application/state/store";

export default function CompletedScreen() {
  const { topupAmount } = useStore();
  const goHome = () => router.replace("/(tabs)/");
  return (
    <View className="flex-1 bg-primary-background">
      <View className="justify-center items-center" style={style.VStack}>
        <View>
          <Animation />
          <View className="items-center">
            <BigText text="Completed" />
            <Body text={`You topped up your card with $${topupAmount}`} />
          </View>
        </View>
      </View>
      <View className="px-5 h-[50%] justify-end">
        <TouchableOpacity
          onPress={goHome}
          className="bg-primary-dark h-12 w-full rounded-full justify-center items-center"
        >
          <SubText text="Done" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
