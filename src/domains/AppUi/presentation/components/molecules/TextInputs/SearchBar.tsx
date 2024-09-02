import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";

interface Props {
  query: string;
  handleSearch: (val: string) => void;
}

export default function SearchBar({ handleSearch, query }: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-row w-full items-center">
        <View className="absolute left-2 z-20">
          <Feather name="search" size={17} color="#999999" />
        </View>
        <TextInput
          placeholder="Search Transactions"
          placeholderTextColor="#888"
          value={query}
          keyboardAppearance="dark"
          onChangeText={handleSearch}
          className="h-12 w-full text-white bg-accent-inputField rounded-lg font-regular pl-8"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
