import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Notifications = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Notifications",
        }}
      />
      <ScrollView>
        <View className="p-4">
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
