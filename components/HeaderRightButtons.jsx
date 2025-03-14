import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import Dashboard from "../lib/api/dashboard";
import Cycle from "../lib/api/cycles";
import { useGlobalContext } from "../context/GlobalProvider";

const HeaderRightButtons = (props) => {
  const pathname = usePathname();
  const { getCycles, getDashboard, getOvulations } = useGlobalContext();

  const refesh = async () => {
    if (pathname == "/dashboard") {
      await getDashboard();
    }

    if (pathname == "/cycle") {
      await getCycles();
    }

    if (pathname == "/ovulations") {
      await getOvulations();
    }
  };

  return (
    <View className="flex flex-row items-center px-3">
      <TouchableOpacity
        onPress={() => router.navigate("/(drawer)/notifications")}
      >
        <Ionicons name="notifications-outline" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={refesh} className="mx-4">
        <Ionicons name="refresh-circle-outline" color={"#fff"} size={23} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("/(drawer)/settings")}>
        <Ionicons name="settings-outline" size={19} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRightButtons;
