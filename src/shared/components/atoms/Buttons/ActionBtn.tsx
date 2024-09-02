import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SubText from "../Texts/SubText";
import useStore from "@/src/core/application/state/store";

interface Props {
  btnText: string;
  onPress: () => void;
}

export default function ActionBtn({ btnText, onPress }: Props) {
  const { freezeCard } = useStore();
  return (
    <TouchableOpacity
      disabled={freezeCard}
      onPress={onPress}
      className={`${
        freezeCard ? "bg-gray-700" : "bg-secondary-bgGray"
      } justify-center h-12 items-center rounded-full w-[48%]`}
    >
      <SubText text={freezeCard ? "Frozen" : btnText} />
    </TouchableOpacity>
  );
}
