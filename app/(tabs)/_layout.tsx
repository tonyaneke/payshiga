import HomeIcon from "@/assets/svgs/HomeIcon";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import React from "react";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  return (
    <GestureHandlerRootView>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#A2A3A3",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#0F0F10",
            elevation: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            borderTopWidth: 0,
            paddingTop: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color, focused, size }) => (
              <HomeIcon color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Transactions"
          options={{
            title: "",
            tabBarIcon: ({ color, focused, size }) => (
              <MaterialIcons name="history" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: "",
            tabBarIcon: ({ color, focused, size }) => (
              <FontAwesome5 name="search" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Card"
          options={{
            title: "",
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons name="card-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "",
            tabBarIcon: ({ color, focused, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
