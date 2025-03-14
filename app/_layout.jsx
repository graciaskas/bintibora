import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

import GlobalProvider from "../context/GlobalProvider";

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

  return (
    <GlobalProvider>
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
