import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { LineChart, BarChart } from "react-native-chart-kit";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Dashboard from "../../lib/api/dashboard";
import { useGlobalContext } from "../../context/GlobalProvider";
import LoadingSpinner from "../../components/LoadingSpinner";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Home = () => {
  const { dashboard, getDashboard, loading } = useGlobalContext();

  useEffect(() => {
    getDashboard();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Dashboard",
          }}
        />
        <ScrollView>
          <View style={{ paddingVertical: 15, paddingHorizontal: 8 }}>
            <Text className="font-Iblack pb-2 text-xl px-2">
              Mon Tableau de board
            </Text>
            {/* Block report */}
            <View className="flex flex-row p-2 pr-7 gap-3 items-center justify-around">
              {/* Block Menstrues */}
              <TouchableOpacity
                onPress={() => router.replace("/cycle")}
                className="bg-secondary-100/10 w-1/2 p-4 rounded-lg"
              >
                <View className="  flex-row items-center justify-between">
                  <View>
                    <Fontisto
                      name="blood-drop"
                      size={25}
                      color="#a00113"
                      className="text-right"
                    />
                  </View>
                  <View className="text-right">
                    <Text className="text-primary font-Iblack text-lg">
                      Mes Cycles
                    </Text>
                    <Text className="text-primary font-Iblack text-lg text-right">
                      {dashboard.cyclesCount?.length}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              {/***  Block Ovulation ***/}
              <TouchableOpacity
                className="ml-2 bg-secondary-100/10 w-1/2 p-4 rounded-lg"
                onPress={() => router.replace("/ovulations")}
              >
                <View className=" flex-row items-center justify-between">
                  <View>
                    <MaterialCommunityIcons
                      name="baby-face-outline"
                      size={25}
                      color="#000"
                      className="text-right"
                    />
                  </View>
                  <View className="text-right">
                    <Text className="text-primary font-Iblack text-lg">
                      Ovulations
                    </Text>

                    <Text className="text-primary font-Iblack text-lg text-right">
                      {dashboard.ovulationsCount?.length}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* Block cycles */}
            <View className="px-2 py-2">
              <Text className="text-primary font-Iblack text-xl pb-4 px-2">
                Cycles menstruels recents
              </Text>
              <View className=" overflow-hidden bg-white border border-black-100/5 rounded-lg">
                {dashboard.cycles?.length == 0 && (
                  <View className="p-4 flex-row items-center">
                    <View className="w-12">
                      <Ionicons
                        name="folder-open-outline"
                        size={20}
                        color={"#000"}
                      />
                    </View>
                    <View className="flex-auto">
                      <Text className="">Aucun enregistrement</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => router.push("/cycle/create")}
                      className="border border-black-200/10 py-2 px-4 rounded-2xl"
                    >
                      <Text>Créer</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {dashboard.cycles?.map((item) => (
                  <TouchableOpacity
                    onPress={() => router.replace("/cycle/" + item._id)}
                    key={item._id}
                  >
                    <View className="px-4 py-3 flex flex-row border-b border-black-200/10 items-center">
                      <View className=" flex flex-row flex-1 items-center">
                        <View className="border border-primary/10 text-center p-2 rounded-full h-12 w-12">
                          <Fontisto
                            name="blood-drop"
                            size={24}
                            color={"#a00113"}
                          />
                        </View>
                        <View className="px-4">
                          <Text className="text-base font-Ibold">
                            {item.code}
                          </Text>
                          <Text>
                            Mois: {item.month} - {item.year}
                          </Text>
                          <Text>
                            Jour: {new Date(item.date).toLocaleDateString()}
                          </Text>
                        </View>
                      </View>
                      <View className=" ">
                        <Ionicons
                          name="chevron-forward-outline"
                          color={"#777"}
                          size={21}
                          className="text-right"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Block fecondité */}
            <View className="px-2 py-2">
              <Text className="text-primary font-Iblack text-xl pb-4 px-2">
                Recentes dates de fértilité
              </Text>
              <View className=" overflow-hidden bg-white border border-black-100/5 rounded-lg">
                {dashboard.ovulations?.length == 0 && (
                  <View className="p-4 flex-row items-center">
                    <View className="w-12">
                      <Ionicons
                        name="folder-open-outline"
                        size={20}
                        color={"#000"}
                      />
                    </View>
                    <View className="flex-auto">
                      <Text className="">Aucun enregistrement</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => router.push("/cycle/create")}
                      className="border border-black-200/10 py-2 px-4 rounded-2xl"
                    >
                      <Text>Créer</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {dashboard.ovulations?.map((item) => (
                  <View
                    className=" flex-row items-center   p-3 py-2 border-b border-primary/5"
                    key={item._id}
                  >
                    <View className="border border-primary/10 text-center p-2 rounded-full h-12 w-12">
                      <MaterialCommunityIcons
                        name="baby-face-outline"
                        size={30}
                        color="#000"
                        className="text-right"
                      />
                    </View>
                    <View className="px-4 relative w-full">
                      <Text className="font-Iblack ">{item.month}</Text>
                      <View className="absolute  right-10 bottom-1 text-white text-sm font-Ibold rounded-lg px-2">
                        <Ionicons
                          name="warning-outline"
                          size={24}
                          color={"#a00113"}
                        />
                      </View>
                      <Text>{new Date(item.date).toLocaleDateString()}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <StatusBar style="light" backgroundColor="#a00113" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
