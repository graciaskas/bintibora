import { Tabs, useRouter, useLocalSearchParams } from "expo-router";
import { Image, Text, useWindowDimensions, View } from "react-native";

/** Import icons */

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import HeaderRightButtons from "../components/HeaderRightButtons";
import HeaderLeftButtons from "../components/HeaderLeftButtons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Fontisto } from "@expo/vector-icons";
import TabBar from "../components/TabBar";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className=" pt-2  relative w-full">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-Iblack" : "font-Iregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
        headerRight: (props) => <HeaderRightButtons />,
        headerStyle: { backgroundColor: "#a00113" },
        headerTitleStyle: { color: "#fff", fontWeight: "black" },
        lazy: true,
        tabBarActiveTintColor: "#cb7b42",
        tabBarInactiveTintColor: "#000",
        tabBarLabelPosition: "below-icon",
        // tabBarShowLabel: false,
        tabBarStyle: {
          // borderTopWidth: 1,
          // borderTopColor: "#232533",
          bottom: 0,
          width: "100%",
          minHeight: "40vh",
          height: 54,
          paddingTop: -1,
          // paddingLeft: 20,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          padding: "0px 5px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        },

        tabBarIconStyle: {
          width: width / 4,
          padding: "1rem",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="space-dashboard" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cycle"
        options={{
          title: "Cycle menstruel",
          tabBarIcon: ({ color, focused }) => (
            <Fontisto name="blood-drop" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ovulations"
        options={{
          title: "Fécondité",

          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="baby-face-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
