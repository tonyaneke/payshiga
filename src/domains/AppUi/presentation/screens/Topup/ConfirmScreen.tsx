import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import style from "@/src/shared/styles/global-styles";
import IconContainer from "../../components/atoms/icons/IconContainer";
import { AntDesign, Feather } from "@expo/vector-icons";
import IconWrapper from "../../components/atoms/icons/IconWrapper";
import BigText from "../../components/atoms/Texts/BigText";
import Body from "@/src/shared/components/atoms/Texts/Body";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import { router } from "expo-router";
import useStore from "@/src/core/application/state/store";

export default function ConfirmScreen() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { topupAmount, topUpCard, getPrimaryAccount } = useStore();
  const { currency } = getPrimaryAccount();

  const confirm = () => {
    topUpCard(currency, topupAmount);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      router.push("/overlays/Completed");
    }, 2000);
  };
  return (
    <View className="flex-1 bg-primary-background">
      <View className="mt-5" style={[style.VStack, style.gapLG]}>
        <IconWrapper large>
          <AntDesign name="arrowup" size={35} color="white" />
        </IconWrapper>
        <BigText text="Confirm Details for Virtual Card Creation" />
        <View className="" style={style.gapXS}>
          <View className="flex-row justify-between items-center">
            <Body text="You will receive" />
            <SubText text={`$${topupAmount - 1}`} />
          </View>
          <View className="flex-row justify-between items-center">
            <Body text="Insurance Fee" />
            <SubText text="$1" />
          </View>
          <View className="flex-row justify-between items-center">
            <Body text="Transaction Type" />
            <SubText text="Card Top up" />
          </View>
          <View className="flex-row justify-between items-center">
            <Body text="Total Debit" />
            <SubText text={`$${topupAmount}`} />
          </View>
        </View>
        <View className="h-[33%] justify-end ">
          <Body
            align="text-center"
            text="Please note that once you tap the Confirm & Pay the transaction can not be reversed"
          />
          <TouchableOpacity
            className="bg-accent-primary  mt-4 w-full justify-center  items-center  h-12 rounded-full"
            onPress={confirm}
          >
            {loading ? (
              <ActivityIndicator color={"white"} />
            ) : (
              <Text className="font-medium text-lg text-white">
                Confirm & Pay
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
