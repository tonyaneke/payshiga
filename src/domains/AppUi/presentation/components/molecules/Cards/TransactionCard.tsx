import { View, Text, Animated, TouchableOpacity } from "react-native";
import React from "react";
import { Transaction } from "@/src/shared/contants/types";
import { Swipeable } from "react-native-gesture-handler";
import tStyles from "../../../styles";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import style from "@/src/shared/styles/global-styles";
import SubText from "@/src/shared/components/atoms/Texts/SubText";
import Body from "@/src/shared/components/atoms/Texts/Body";
import TxAmount from "../../atoms/Texts/TxAmount";
import Avatar from "@/src/shared/components/atoms/Images/Avatar";
import { getColor, validateIcon } from "@/src/shared/utils/tools";
import IconHelper from "@/src/shared/components/atoms/icon/IconHelper";

interface Props {
  transaction: Transaction;
  onDismiss: () => void;
}

export default function TransactionCard({ onDismiss, transaction }: Props) {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<any>,
    dragX: Animated.AnimatedInterpolation<any>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity onPress={onDismiss}>
        <Animated.View
          style={[tStyles.rightAction, { transform: [{ scale }] }]}
        >
          <Ionicons name="eye-off-outline" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View
        className="h-20 m-1  rounded-md flex-row items-center justify-between"
        style={[style.shadowBox]}
      >
        <View className="flex-row" style={style.gapSM}>
          <Avatar
            Icon={
              <IconHelper
                initial={transaction.name.slice(0, 2).toLocaleUpperCase()}
                status={transaction.status}
              />
            }
            hasIcon={validateIcon(transaction)}
            color={getColor(transaction.status)}
          />
          <View>
            <Body text={transaction.label} />
            <SubText text={transaction.name} />
          </View>
        </View>
        <TxAmount amount={transaction.amount} status={transaction.status} />
      </View>
    </Swipeable>
  );
}
