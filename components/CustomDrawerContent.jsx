import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import images from "../constants/images";

import { useGlobalContext } from "../context/GlobalProvider";

const CustomDrawerContent = (props) => {
  const { signout, currentUser } = useGlobalContext();
  const [user, setUser] = useState(JSON.parse(currentUser));

  return (
    <View style={{ flex: 1 }} className="bg-white p-4 pt-10">
      <View className="p-4 rounded-2xl border  border-slate-300 flex-row items-center overflow-hidden">
        <Image
          source={images.logo}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <View className="flex-1 px-4">
          <Text className="font-Iblack text-lg">{user?.name}</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>

      {/* Drawer Navigation Content */}
      <DrawerContentScrollView
        contentContainerStyle={{
          marginTop: -30,
          zIndex: 10,
        }}
        {...props}
        className="relative h-full"
      >
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItem
            label={"Tableau de bord"}
            labelStyle={{
              fontSize: 15,
              paddingHorizontal: 0,
              paddingVertical: 0,
            }}
            icon={({ color, size }) => (
              <Ionicons name="grid-outline" color={"#000"} size={24} />
            )}
            onPress={() => router.push("/dashboard")}
          />

          <DrawerItem
            label="Cycles menstruels"
            labelStyle={{
              fontSize: 15,
            }}
            icon={({ color, focused }) => (
              <Fontisto name="blood-drop" size={24} color={"#000"} />
            )}
            onPress={() => router.push("/(drawer)/cycle")}
          />

          <DrawerItem
            label="Dates de Fértilité"
            labelStyle={{
              fontSize: 15,
            }}
            icon={({ color, focused }) => (
              <Ionicons name="male-female-outline" size={24} color={"#000"} />
            )}
            onPress={() => router.push("/(drawer)/ovulations")}
          />

          <DrawerItem
            label={"Education sexuelle"}
            labelStyle={{
              fontSize: 15,
            }}
            icon={({ color, size }) => (
              <Ionicons name="book-outline" size={22} color="black" />
            )}
            onPress={() => router.push("/(drawer)/education")}
          />
          <DrawerItem
            label={"Mythes et témoignage"}
            labelStyle={{
              fontSize: 15,
            }}
            icon={({ color, size }) => (
              <Ionicons name="thumbs-down-outline" size={24} color="black" />
            )}
            onPress={() => router.push("/(drawer)/mythes")}
          />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          // backgroundColor: colors.cardbackground,
        }}
      >
        <Text style={styles.preferences}>Preferences</Text>
        <View style={styles.switchTextContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor="#f4f3f4"
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
          <Text
            style={{
              fontSize: 15,
            }}
          >
            Thème sombre
          </Text>
        </View>
      </View>
      <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 10,
              }}
            >
              Partager
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="flag-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 10,
              }}
            >
              Signaler un problème
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 10 }} onPress={signout}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="power-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 10,
              }}
            >
              Se deconnecter
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
  },
  switchTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: "#ccc",
    paddingTop: 8,
    fontWeight: "500",
    paddingLeft: 20,
  },
  switchText: {
    fontSize: 15,
    color: "",
    paddingTop: 8,
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
