import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

export default function Animation() {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <View className="w-60 h-60 justify-center items-center">
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "transparent",
        }}
        source={require("@/success.json")}
      />
    </View>
  );
}
