import { View, Text } from "react-native";
import React from "react";

interface Props {
  status: string;
  amount: string;
}

export default function TxAmount({ amount, status }: Props) {
  console.log(status);
  return (
    <Text
      className={`font-medium ${status === "declined" ? "line-through" : ""} `}
    >
      <Text
        style={amount[0] === "-" ? { color: "#6F6F6F" } : { color: "#A6FFB5" }}
      >
        {amount}
      </Text>
    </Text>
  );
}
