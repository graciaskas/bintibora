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

import Header from "../../components/Header";
import EmptyState from "../../components/EmptyState";
import { RefreshControl } from "react-native-web";

// import Ovulations from "../../../data/Ovulations.json";
import { StatusBar } from "expo-status-bar";
import { Link, router, Stack } from "expo-router";

import Ovulation from "../../lib/api/ovulations";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../../context/GlobalProvider";

import LoadingSpinner from "../../components/LoadingSpinner";

const Ovulations = () => {
  const { ovulations, getOvulations, loading, refreshing, setRefreshing } =
    useGlobalContext();

  const onRefresh = async () => {
    setRefreshing(true);
    getOvulations();
    setRefreshing(false);
    //setTimeout(() => setRefreshing(false), 600);
  };

  const remove = async (id) => {
    new Ovulation()
      .deleteById(id)
      .then((res) => {
        Alert.alert("Suppression", "Enregistrement supprimé avec succéss !");
        //Reload
        getOvulations();
      })
      .catch((e) => {
        Alert.alert("Un problème est survenu", e.message);
      });
  };

  useEffect(() => {
    getOvulations();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Dates de fertilité",
        }}
      />
      {ovulations.length && <Header />}
      <FlatList
        data={ovulations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View className="px-4 py-3 flex flex-row border-b border-black-200/10 items-center">
            <View className=" flex flex-row flex-1 items-center">
              <View className="border border-primary/10 text-center p-2 rounded-full h-12 w-12">
                <MaterialCommunityIcons
                  name="baby-face-outline"
                  size={24}
                  color={"#000"}
                />
              </View>
              <View className="px-4">
                <Text className="text-base font-Ibold">
                  {new Date(item.date).toLocaleDateString()}
                </Text>
                <Text>{item.month}</Text>
                <Text>{item.cycle_id}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => remove(item._id)}>
              <Ionicons name="trash-outline" color="#a00113" size={20} />
            </TouchableOpacity>
          </View>
        )}
        // ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => (
          <EmptyState
            title="Pas d'enregistrement"
            subtitle="Veuillez créer un actuellement..."
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <StatusBar style="light" backgroundColor="#a00113" />
    </SafeAreaView>
  );
};

export default Ovulations;
