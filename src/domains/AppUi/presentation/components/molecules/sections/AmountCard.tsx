import { Dimensions, TextInput, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import style from "@/src/shared/styles/global-styles";
import CountryDropdown from "../DropDowns/CountryDropDown";
import TopBar from "./TopBar";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import useStore from "@/src/core/application/state/store";
import {
  convertToUSD,
  createCurrencyConverter,
} from "@/src/shared/utils/tools";

const { height, width } = Dimensions.get("window");

interface Props {
  amount: string | number | undefined;
  setAmount: (val: string | number) => void;
  setError: (val: boolean) => void;
}

export default function AmountCard({ amount, setAmount, setError }: Props) {
  const { getPrimaryAccount, exchangeRates, setTopupAmount, topupAmount } =
    useStore();
  const { currency, balance, icon } = getPrimaryAccount();

  console.log(topupAmount);
  useEffect(() => {
    setTopupAmount(convertToUSD(Number(amount), currency));
    if (
      Number(amount) === 0 ||
      Number(amount) < 5 ||
      Number(amount) > balance
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [amount]);

  return (
    <View
      className="w-full p-3 bg-primary-dark border border-accent-inputField rounded-lg"
      style={[
        {
          height: height * 0.3,
        },
        style.shadowBox,
      ]}
    >
      <TopBar setMax={setAmount} />
      <View className="items-center  py-5 h-full">
        <View className="flex-row items-center ">
          <Text className="font-bold bottom-3 text-white text-3xl">{icon}</Text>
          <TextInput
            value={`${Number(amount)}`}
            onChangeText={setAmount}
            className="text-[60px] font-bold text-white"
            placeholder={"0"}
          />
        </View>
        <View className="flex-row items-center">
          <Text className="font-bold text-white  text-2xl">=</Text>
          {Number(amount) !== 0 && Number(amount) < 5 && (
            <Text className="text-red-600 font-medium pl-2 text-lg">
              Minimum amount is {currency}5
            </Text>
          )}
          {Number(amount) > balance ? (
            <Text className="text-red-600 font-medium pl-2 text-lg">
              Not Enough {currency} 😏
            </Text>
          ) : (
            Number(amount) > 5 && <SubText text={Number(amount)} />
          )}
        </View>
      </View>
    </View>
  );
}
