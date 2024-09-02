import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme } from "nativewind";
import { Currency } from "@/src/core/application/state/store";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
];

type Props = {
  icon?: boolean;
  label: string;
  dataa?: any;
  select: (val: Currency) => void;
  value: string;
  bgColor?: string;
};

const DropdownField = ({
  icon,
  label,
  dataa,
  select,
  value,
  bgColor = "#DFE0E1",
}: Props) => {
  const { colorScheme } = useColorScheme();

  return (
    <Dropdown
      style={[styles.dropdown, { backgroundColor: "#232425" }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={dataa}
      containerStyle={{
        borderRadius: 5,
      }}
      itemTextStyle={{
        fontSize: 16,
        fontFamily: "NonitoRegular",
        color: "#999999",
      }}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={label}
      searchPlaceholder="Search"
      value={value}
      onChange={(item: any) => {
        select(item.value);
      }}
      iconColor="#999999"
      renderLeftIcon={() =>
        icon ? (
          <AntDesign
            style={styles.icon}
            color="#999999"
            name="Safety"
            size={20}
          />
        ) : null
      }
    />
  );
};

export default memo(DropdownField);

const styles = StyleSheet.create({
  dropdown: {
    height: 42,
    width: "100%",
    marginHorizontal: "auto",
    borderBottomColor: "gray",

    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "ShigaM",
    color: "#999999",
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "ShigaM",
    color: "#999999",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 35,
    fontSize: 16,
    fontFamily: "ShigaM",
    color: "#999999",
    borderRadius: 5,
  },
});
