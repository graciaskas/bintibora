import { View, Platform, StyleSheet } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icon = {
    dashboard: (propos) => <Feather name="home" size={24} {...propos} />,
    ovulations: (propos) => (
      <MaterialCommunityIcons name="baby-face-outline" size={24} {...propos} />
    ),
    cycle: (propos) => <Fontisto name="blood-drop" size={24} {...propos} />,
  };

  return (
    <View
      style={styles.container}
      className="flex-row absolute bottom-2 bg-white justify-between items-center mx-8"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 4,
            }}
          >
            {icon[route.name]({
              color: isFocused ? "#ff0113" : "#fff",
            })}
            <Text
              style={{
                color: isFocused ? "#ff0113" : "#fff",
                fontSize: 11,
                fontWeight: "bold",
                paddingHorizontal: 2,
              }}
            >
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#000",
    paddingVertical: 3,
    borderBottomColor: "#eee",
    borderRadius: 30,
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  text: {},
});

// const MyTabs = createBottomTabNavigator({
//   tabBar: (props) => <TabBar {...props} />,
//   screens: {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//   },
// });
