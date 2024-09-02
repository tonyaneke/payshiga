import { View, Text } from "react-native";
import React from "react";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import MoreBtn from "../../atoms/Buttons/MoreBtn";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import Entypo from "@expo/vector-icons/build/Entypo";
import style from "@/src/shared/styles/global-styles";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import Feather from "@expo/vector-icons/build/Feather";

export default function DoMore() {
  return (
    <View
      className="h-auto w-full bg-secondary-gray py-3 px-20"
      style={style.gapSM}
    >
      <SubText text="Do more with Shiga" />
      <View style={style.gapSM}>
        <MoreBtn
          Icon={<FontAwesome name="refresh" size={20} color="white" />}
          caption="Swap between Currencies"
          title="Convert Money"
          RightIcon={
            <Entypo name="dots-three-vertical" size={20} color="#999999" />
          }
        />
        <MoreBtn
          Icon={<FontAwesome5 name="graduation-cap" size={20} color="white" />}
          caption="Pay your tuition in seconds"
          title="Tuition Payment"
          RightIcon={<Feather name="chevron-right" size={20} color="#999999" />}
        />
        <MoreBtn
          Icon={<Feather name="lock" size={20} color="white" />}
          caption="Pay your suppliers globally"
          title="Pay a Merchant"
          RightIcon={<Feather name="chevron-right" size={20} color="#999999" />}
        />
      </View>
    </View>
  );
}
