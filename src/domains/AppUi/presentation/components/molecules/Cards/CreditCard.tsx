import { View, Text, Image } from "react-native";
import React from "react";
import style from "@/src/shared/styles/global-styles";
import { LinearGradient } from "expo-linear-gradient";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/build/Entypo";
import BigText from "../../atoms/Texts/BigText";
import useStore from "@/src/core/application/state/store";

interface Props {
  freeze: boolean;
}

export default function CreditCard() {
  const { freezeCard } = useStore();
  return (
    <View
      style={style.shadowBox}
      className="bg-gray-100 w-full h-52  mt-3 rounded-lg"
    >
      {freezeCard && (
        <View className="absolute h-[100%] bg-slate-300 z-10 w-full justify-center items-center">
          <Text className="font-bold">Card is Frozen</Text>
        </View>
      )}
      <LinearGradient
        style={{
          height: "100%",
        }}
        className="p-4 rounded-lg justify-between"
        colors={["#fff", "transparent"]}
      >
        <View className="flex-row items-center">
          <View className="flex-1" />
          <Image
            source={require("@/assets/images/splash.png")}
            style={{ height: 80, width: 80 }}
            resizeMode="contain"
            className="shadow-md"
          />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row">
            <Text className="text-3xl">****</Text>
            <Text className="text-2xl">8904</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold text-3xl">Visa</Text>
            <Text className="font-regular text-xs">Digital</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
