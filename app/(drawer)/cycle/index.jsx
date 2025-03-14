import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/Header";
import EmptyState from "../../../components/EmptyState";
import { RefreshControl } from "react-native-web";

import { StatusBar } from "expo-status-bar";
import { Link, router, Stack } from "expo-router";

import Cycle from "../../../lib/api/cycles";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useGlobalContext } from "../../../context/GlobalProvider";

const Cycles = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { cycles, getCycles } = useGlobalContext();

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setTimeout(() => setRefreshing(false), 600);
  };

  const remove = async (id) => {
    new Cycle()
      .deleteById(id)
      .then((res) => {
        console.log(res);
        Alert.alert("Suppression", "Enregistrement supprimé avec succéss !");
        //Reload
        getCycles();
      })
      .catch((e) => {
        Alert.alert("Un problème est survenu", e.message);
      });
  };

  useEffect(() => {
    getCycles();
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Cycles menstruels",
        }}
      />
      {cycles?.length && <Header />}

      <FlatList
        data={cycles}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View className="px-4 py-3 flex flex-row border-b border-black-200/10 items-center">
            <View className=" flex flex-row flex-1 items-center">
              <View className="border border-primary/10 text-center p-2 rounded-full h-12 w-12">
                <Fontisto name="blood-drop" size={24} color={"#a00113"} />
              </View>
              <View className="px-4">
                <Text className="text-base font-Ibold">{item.code}</Text>
                <Text>
                  * Début du cycle : {new Date(item.date).toLocaleDateString()}
                </Text>
                <Text>
                  * Fin du cycle :
                  {new Date(item.date_endcycle).toLocaleDateString()}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              className="px-4"
              onPress={() => router.push("/cycle/" + item._id)}
            >
              <Ionicons name="create-outline" color="#000" size={22} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => remove(item._id)}>
              <Ionicons name="trash-outline" color="#a00113" size={20} />
            </TouchableOpacity>
          </View>
        )}
        // ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => (
          <EmptyState
            title="Pas d'enregistrement"
            subtitle="Veuillez créer un nouveau cycle menstruel."
          />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
      <StatusBar style="light" backgroundColor="#a00113" />
    </SafeAreaView>
  );
};

export default Cycles;
