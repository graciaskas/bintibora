import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Intermediaires = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Mythes et témoignage",
        }}
      />
      <Text>Mythes Screen</Text>
    </SafeAreaView>
  );
};

export default Intermediaires;
