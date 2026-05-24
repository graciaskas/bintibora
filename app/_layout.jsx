import { SplashScreen, Stack } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

import GlobalProvider from "../context/GlobalProvider";
import { useGlobalContext } from "../context/GlobalProvider";
import { useEffect as useEffectReact, useState as useStateReact } from "react";

export default function RootLayout() {
  const [loadedFont] = useFonts({
    "Inter_18pt-Black": require("../assets/fonts/Inter_18pt-Black.ttf"),
    "Inter_18pt-Bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter_18pt-Regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
  });

  useEffect(() => {
    if (loadedFont) SplashScreen.hideAsync();
  }, [loadedFont]);

  if (!loadedFont) return null;

  // Ajout d'un bouton de toggle theme pour test
  function ThemeToggleButton() {
    const { theme, toggleTheme } = useGlobalContext();
    return (
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
          backgroundColor: "#eee",
          padding: 8,
          borderRadius: 8,
        }}
      >
        <Text>Mode: {theme || "auto"}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <GlobalProvider>
      <ThemeToggleButton />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="search/[query]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GlobalProvider>
  );
}
