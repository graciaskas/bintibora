import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import { Link, router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const pathname = usePathname();
  return (
    <View
      style={{ marginTop: -10 }}
      className="w-full  px-4 flex flex-row items-center justify-center"
    >
      <TouchableOpacity
        className="pr-4"
        onPress={() => router.replace("/cycle/create")}
      >
        <View>
          <Ionicons name="add-circle" size={40} color="black" />
        </View>
      </TouchableOpacity>

      <SearchInput initialQuery="" />
    </View>
  );
};

export default Header;
