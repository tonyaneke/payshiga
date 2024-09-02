import { View, Text } from "react-native";
import React from "react";
import style from "@/src/shared/styles/global-styles";
import BigText from "../../atoms/Texts/BigText";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import ActionBtn from "@/src/shared/components/atoms/Buttons/ActionBtn";
import useStore from "@/src/core/application/state/store";
import DropDown from "../DropDowns/DropDown";
import { formatBalance } from "@/src/shared/utils/tools";

const data = [
  { label: "USD", value: "USD" },
  { label: "NGN", value: "NGN" },
  { label: "GBP", value: "GBP" },
];

export default function BalanceCard() {
  const { getPrimaryAccount, setPrimaryAccount } = useStore();
  const { balance, currency, icon } = getPrimaryAccount();

  return (
    <View
      className="h-40 w-full p-3 bg-primary-dark rounded-md justify-between"
      style={style.shadowBox}
    >
      <View className="flex-row items-center justify-between">
        <SubText text={`${currency} Balance`} />
        <View className="bg-secondary-gray h-8 w-20 rounded-lg">
          <DropDown
            select={setPrimaryAccount}
            label="Cur"
            value={currency}
            dataa={data}
          />
        </View>
      </View>
      <BigText text={`${icon + formatBalance(balance)}`} />
      <View className="flex-row items-center" style={style.gapSM}>
        <ActionBtn onPress={() => {}} btnText="Add Money" />
        <ActionBtn onPress={() => {}} btnText="Transfer" />
      </View>
    </View>
  );
}
