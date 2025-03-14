import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import icons from "../constants/icons";

const SearchInput = ({ initialQuery, styles }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View
      className={`flex-1 flex flex-row items-center space-x-4 w-full h-12 px-4 bg-white rounded-2xl border border-black-200/15 focus:border-secondary  mb-2`}
    >
      <TextInput
        className="text-base mt-0.5 text-primary flex-1 font-Iregular"
        value={query}
        placeholder={`Rechercher dans ${pathname.replace("/", "")}`}
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
