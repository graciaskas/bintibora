import { useContext } from "react";
import { useColorScheme as useRNColorScheme } from "react-native";
import { useGlobalContext } from "../context/GlobalProvider";

// Hook qui retourne le thème choisi (manuel ou système)
export function useColorScheme() {
  const { theme } = useGlobalContext ? useGlobalContext() : { theme: null };
  const systemScheme = useRNColorScheme();
  return theme || systemScheme || "light";
}
