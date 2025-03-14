import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useGlobalContext } from "../../context/GlobalProvider";
import images from "../../constants/images";

import { Dimensions } from "react-native";

// Get screen height
const screenHeight = Dimensions.get("window").height;

const Settings = () => {
  const { currentUser, signout } = useGlobalContext();
  const [user, setUser] = useState(JSON.parse(currentUser));

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            title: "Paramètres",
            headerShown: true,
          }}
        />
        <ImageBackground
          source={images.userBackground}
          className="w-full flex-1 h-full bg-white"
          style={{
            height: screenHeight - 580,
            marginTop: -60,
          }}
        >
          <View className="p-4 bg-secondary py-5   flex flex-row items-center justify-between">
            <TouchableOpacity onPress={() => router.back()}>
              <View>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color={"#fff"}
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text className="text-white text-xl font-Ibold">{user.name}</Text>
            </View>
          </View>
        </ImageBackground>
        <ScrollView className="" style={{ marginTop: -50 }}>
          {/* Block account setting */}
          <View
            className="account p-4"
            style={{ marginVertical: 22, alignItems: "center" }}
          >
            <TouchableOpacity
              className="flex flex-row  items-center justify-between border-primary/5 border-b"
              style={{
                paddingVertical: 14,
                paddingLeft: 12,
              }}
            >
              <Image
                source={images.profile}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 85,
                  borderWidth: 5,
                  borderColor: "#fff",
                }}
              />
            </TouchableOpacity>
            <View className="py-3 ">
              <Text className="font-Iblack text-xl text-white">
                {user.name}
              </Text>
              <View className="flex-row items-center">
                <Ionicons name="map-outline" size={24} color={"#fff"} />
                <Text className="text-white"> Goma, RDC</Text>
              </View>
            </View>
          </View>
          {/* Block account setting */}
          <View className="account p-4" style={{ marginTop: -10 }}>
            <Text className="font-Iblack text-xl px-1 pb-4">Compte</Text>
            <View className="bg-white rounded-lg overflow-hidden border-primary/5 border">
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                }}
                onPress={() => router.push("/users/edit")}
              >
                <View className="flex flex-row items-center">
                  <Ionicons name="person-outline" size={24} color={"#000"} />
                  <Text className="ml-8 text-base  font-Ibold">
                    Modifier le profile
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                  backgroundColor: "#fff",
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons
                    name="shield-half-outline"
                    size={24}
                    color={"#000"}
                  />
                  <Text className="ml-8 text-base  font-Ibold">Securité</Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-primary/5 border-b"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color={"#000"}
                  />
                  <Text className="ml-8 text-base  font-Ibold">
                    Notifications
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-primary/5 border-b"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color={"#000"}
                  />
                  <Text className="ml-8 text-base  font-Ibold">
                    Confidentialité
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          ;{/* Block support and about setting */}
          <View className="account p-4">
            <Text className="font-Iblack text-xl px-1 pb-4">
              Support et à propos
            </Text>
            <View className="bg-white rounded-lg overflow-hidden border-primary/5 border">
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons
                    name="help-circle-outline"
                    size={24}
                    color={"#000"}
                  />
                  <Text className="ml-8 text-base  font-Ibold">
                    Aide et support
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                  backgroundColor: "#fff",
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color={"#000"}
                  />
                  <Text className="ml-8 text-base  font-Ibold">
                    Conditions et politiques
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Block action setting */}
          <View className="account p-4">
            <Text className="font-Iblack text-xl px-1 pb-4">Actions</Text>
            <View className="bg-white rounded-lg overflow-hidden border-primary/5 border">
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons
                    name="share-social-outline"
                    size={24}
                    color={"#000"}
                  />
                  <Text className="ml-8 text-base  font-Ibold">Partager</Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                  backgroundColor: "#fff",
                }}
              >
                <View className="flex flex-row items-center">
                  <Ionicons name="flag-outline" size={24} color={"#000"} />
                  <Text className="ml-8 text-base  font-Ibold">
                    Signaler un problème
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex flex-row bg-primary    items-center justify-between border-b border-primary/5"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                  backgroundColor: "#fff",
                }}
                onPress={signout}
              >
                <View className="flex flex-row items-center">
                  <Ionicons name="power-outline" size={24} color={"#000"} />
                  <Text className="ml-8 text-base  font-Ibold">
                    Se deconnecter
                  </Text>
                </View>
                <View className="px-3">
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color={"#000"}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar style="light" backgroundColor="#a00113" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Settings;
