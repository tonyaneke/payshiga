import { Platform, StyleSheet } from "react-native";

const style = StyleSheet.create({
  VStack: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  gapLG: {
    gap: 50,
  },
  gapMD: {
    gap: 25,
  },
  gapSM: {
    gap: 15,
  },
  gapXS: {
    gap: 7,
  },
  shadowBox: {
    ...Platform.select({
      ios: {
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default style;
