import { View, StatusBar, Text } from "react-native";
import React from "react";
import style from "@/src/shared/styles/global-styles";
import Header from "../components/molecules/sections/Header";
import BigText from "../components/atoms/Texts/BigText";
import Body from "@/src/shared/components/atoms/Texts/Body";
import CreditCard from "../components/molecules/Cards/CreditCard";
import ActionBtn from "@/src/shared/components/atoms/Buttons/ActionBtn";
import CardActions from "../components/molecules/sections/CardActions";
import { router } from "expo-router";
import useStore from "@/src/core/application/state/store";
import { formatBalance } from "@/src/shared/utils/tools";

export default function CardScreen() {
  const {
    card,
    withdrawFromCard,
    getPrimaryAccount,
    freezeCard,
    getTransactions,
  } = useStore();
  const { currency } = getPrimaryAccount();
  console.log("CardActions", card);
  const topup = () => {
    router.push("/overlays");
  };

  const tx = getTransactions();
  console.log("tx", tx);

  return (
    <View className="flex-1 bg-primary-background">
      <View style={style.VStack}>
        <Header color="#FFC8DD" initial="TO" />
        <View style={style.gapXS} className="items-center mt-3">
          <Text
            className={`font-bold text-4xl text-white ${
              freezeCard ? "line-through" : ""
            }`}
          >{`$${formatBalance(card.balance)}`}</Text>
          <Body text="Available to spend" />
          <CreditCard />
          <View
            className="flex-row my-5 items-center justify-start"
            style={style.gapSM}
          >
            <ActionBtn btnText="Topup" onPress={topup} />
            <ActionBtn
              btnText="Withdraw"
              onPress={() => withdrawFromCard(currency, card.balance)}
            />
          </View>
          <View>
            <CardActions />
          </View>
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
