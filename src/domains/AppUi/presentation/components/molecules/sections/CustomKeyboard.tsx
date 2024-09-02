import Feather from "@expo/vector-icons/build/Feather";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface Props {
  setAmount: (val: number | string) => void;
  error?: boolean;
}

export default function CustomKeyboard({ setAmount, error }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Function to handle key taps
  const onKeyTap = (value: string) => {
    if (value === "<") {
      setInput(input.slice(0, -1));
      setAmount(input.slice(0, -1));
    } else {
      setInput(input + value);
      setAmount(input + value);
    }
  };

  const pay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      router.push("/overlays/Confirm");
    }, 2000);
  };

  return (
    <View className="w-full">
      <View className="w-full ">
        {buildNumberRow(["1", "2", "3"], onKeyTap)}
        {buildNumberRow(["4", "5", "6"], onKeyTap)}
        {buildNumberRow(["7", "8", "9"], onKeyTap)}
        {buildNumberRow([".", "0", "<"], onKeyTap)}
      </View>
      <TouchableOpacity
        disabled={error}
        className={`${
          !error ? "bg-accent-primary" : "bg-accent-disabledBtn"
        }  mt-4 w-full justify-center  items-center  h-12 rounded-full`}
        onPress={pay}
      >
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : success ? (
          <Feather name="check-circle" size={24} color="white" />
        ) : (
          <Text className="font-medium text-lg text-white">Continue</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const buildNumberRow = (values: string[], onKeyTap: Function) => {
  return (
    <View className="flex-row justify-between">
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          style={styles.key}
          onPress={() => onKeyTap(value)}
          className="h-12 w-[33%] justify-center items-center"
        >
          <Text className="font-medium text-3xl text-white">{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    fontSize: 32,
    color: "white",
    marginBottom: 20,
  },
  keyboard: {
    // No background color for the keyboard itself.
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    alignItems: "center",
  },
  key: {},
  keyText: {
    fontSize: 24,
    color: "white",
  },
  continueButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#4B4BFF",
    borderRadius: 10,
  },
  continueButtonText: {
    fontSize: 20,
    color: "white",
  },
});
