import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const flags = {
  usa: require("@/assets/images/usa.png"),
  ng: require("@/assets/images/ng.png"),
  uk: require("@/assets/images/uk.png"),
};

const CountryDropdown = () => {
  const [selectedFlag, setSelectedFlag] = useState(null);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedFlag(value)}
        items={[
          { label: "USD", value: "usa" },
          { label: "NGN", value: "ng" },
          { label: "GBP", value: "uk" },
        ]}
        placeholder={{ label: "Select a country...", value: null }}
      />

      {selectedFlag && (
        <Image source={flags[selectedFlag]} style={styles.flagImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    height: 50,
  },
  flagImage: {
    marginTop: 20,
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
});

export default CountryDropdown;
