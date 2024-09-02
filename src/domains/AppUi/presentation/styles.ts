import { StyleSheet } from "react-native";

const tStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  separator: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: "slategray",
  },
  separatorText: {
    color: "#fff",
    fontWeight: "bold",
  },
  transactionItem: {
    backgroundColor: "#2a2a2a",
    height: 100,
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
  amount: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  rightAction: {
    backgroundColor: "slategray",
    justifyContent: "center",
    alignItems: "flex-end",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: "100%",
  },
});

export default tStyles;
