import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../components/CustomDrawerContent";
import HeaderRightButtons from "../../components/HeaderRightButtons";
import "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        backBehavior="history"
        screenOptions={{
          headerShown: false,
          headerRight: (props) => <HeaderRightButtons />,
          headerStyle: { backgroundColor: "#a00113" },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "black",
            textAlign: "center",
            alignSelf: "center",
            fontSize: 16,
          },
          headerShadowVisible: false,
          drawerItemStyle: {
            padding: 10,
          },
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="grid-outline" color={"#fff"} size={24} />
          ),
          drawerActiveBackgroundColor: "#ddd",
        }}
      />
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
