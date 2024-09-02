import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import Body from "@/src/shared/components/atoms/Texts/Body";
import CardActionBtn from "../../atoms/Buttons/CardActionBtn";
import Entypo from "@expo/vector-icons/build/Entypo";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import useStore from "@/src/core/application/state/store";

export default function CardActions() {
  const { freezeCard, setFreezeCard } = useStore();

  const toggleFreeze = () => setFreezeCard(!freezeCard);

  return (
    <View className="w-full h-[200px] items-start">
      <View className=" w-[40%]">
        <Body text="MANAGE CARD" />
      </View>
      <View>
        <CardActionBtn
          RightIcon={
            <Entypo name="dots-three-vertical" size={24} color="#999999" />
          }
          Icon={<Ionicons name="card-outline" size={30} color="#999999" />}
          btnText="Card Details"
          onPress={() => {}}
        />
        <CardActionBtn
          RightIcon={
            <Switch
              onValueChange={toggleFreeze}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={freezeCard ? "#f5dd4b" : "#f4f3f4"}
              value={freezeCard}
            />
          }
          Icon={<MaterialIcons name="severe-cold" size={30} color="#999999" />}
          btnText="Freeze Card"
          onPress={() => {}}
        />
        <CardActionBtn
          Icon={<Ionicons name="trash" size={30} color="#999999" />}
          btnText="Delete"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}
