import { View, Text } from "react-native";
import React, { useState } from "react";
import Title from "@/src/shared/components/atoms/Texts/Title";
import CloseBtn from "../../components/atoms/Buttons/CloseBtn";
import AmountCard from "../../components/molecules/sections/AmountCard";
import VirtualCardWrap from "@/src/shared/components/containers/VirtualCardWrapper";
import style from "@/src/shared/styles/global-styles";
import CustomKeyboard from "../../components/molecules/sections/CustomKeyboard";

export default function TopupScreen() {
  const [amount, setAmount] = useState<number | string>(0);
  const [error, setError] = useState(true);

  return (
    <View className="bg-primary-background flex-1 justify-center items-center">
      <View className="flex-1 px-5">
        <View className="flex-row items-center w-full justify-between mt-5">
          <Title title="Top up" />
          <CloseBtn />
        </View>
        <View className="mt-3" style={style.gapMD}>
          <AmountCard
            setError={setError}
            amount={amount}
            setAmount={setAmount}
          />
          <VirtualCardWrap />
          <CustomKeyboard setAmount={setAmount} error={error} />
        </View>
      </View>
    </View>
  );
}
