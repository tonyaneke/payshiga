import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Flag from "../../atoms/Flag";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import Body from "@/src/shared/components/atoms/Texts/Body";
import style from "@/src/shared/styles/global-styles";
import useStore from "@/src/core/application/state/store";

interface Props {
  setMax: (val: string | number) => void;
}

export default function TopBar({ setMax }: Props) {
  const [isMax, setIsMax] = useState(false);
  const { getPrimaryAccount } = useStore();
  const { currency, balance, icon } = getPrimaryAccount();

  const onMax = () => {
    if (isMax) {
      setMax(0);
      setIsMax(false);
      return;
    }
    setMax(balance);
    setIsMax(true);
  };

  return (
    <View className="flex-row items-center justify-between border-b-[0.5px] pb-3 border-subText">
      <View className="flex-row items-center" style={style.gapXS}>
        <Flag
          name={`${
            currency === "NGN" ? "ng" : currency === "USD" ? "us" : "uk"
          }`}
        />
        <View>
          <SubText text={`${currency}`} />
          <Body text={`${icon + balance}`} />
        </View>
      </View>
      <TouchableOpacity
        onPress={onMax}
        className="border-2 w-[100px] h-10 rounded-full justify-center items-center border-subText"
      >
        <SubText text={!isMax ? "Use Max" : "Maxed"} />
      </TouchableOpacity>
    </View>
  );
}
