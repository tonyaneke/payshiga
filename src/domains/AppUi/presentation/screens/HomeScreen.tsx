import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import style from "@/src/shared/styles/global-styles";
import Header from "../components/molecules/sections/Header";
import BalanceCard from "../components/molecules/Cards/BalanceCard";
import ActionCard from "../components/molecules/Cards/ActionCard";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/build/Feather";
import DoMore from "../components/molecules/sections/More";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-primary-background pt-2 ">
      <View className="flex-1 " style={[style.VStack, style.gapMD]}>
        <Header icon color="#FFC8DD" initial="TO" title="Home" />
        <BalanceCard />
        <View
          className="flex-row items-center justify-between"
          style={style.gapSM}
        >
          <ActionCard
            title="Bank Account"
            caption="Show account info"
            Icon={
              <MaterialCommunityIcons name="bank" size={22} color="white" />
            }
          />
          <ActionCard
            title="Pay Bills"
            caption="Top-Up & Utilities"
            Icon={<Feather name="send" size={22} color="white" />}
          />
        </View>
        <View className="-mx-20">
          <DoMore />
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
