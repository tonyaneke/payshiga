import { View, Text, Image } from "react-native";
import React from "react";
import style from "@/src/shared/styles/global-styles";
import { LinearGradient } from "expo-linear-gradient";

export default function VirtualCard() {
  return (
    <View
      style={style.shadowBox}
      className="bg-gray-100 justify-center w-20 h-14  rounded-lg"
    >
      <LinearGradient
        style={{
          height: "100%",
        }}
        className="p-1 rounded-lg justify-between"
        colors={["#fff", "transparent"]}
      >
        <View className="flex-row items-center">
          <View className="flex-1" />
          <Image
            source={require("@/assets/images/splash.png")}
            style={{ height: 20, width: 20 }}
            resizeMode="contain"
            className="shadow-md"
          />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-1" />
          <View className="items-center">
            <Text className="font-bold text-xs">Visa</Text>
            <Text className="font-regular text-[6px]">Digital</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
