import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Header from "../components/Header";
import EmptyState from "../components/EmptyState";
import { RefreshControl } from "react-native-web";

import exportateurs from "../data/exportateurs.json";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";

import Cycle from "../lib/api/Cycles";
import { Fontisto, Ionicons } from "@expo/vector-icons";

const Exportateurs = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setTimeout(() => setRefreshing(false), 600);
  };

  useEffect(() => {
    async function getData() {
      const res = await new Cycle().getAll({
        limit: 300,
        offset: 0,
      });
      console.log(res.data);
      setData(res.data);
    }
    getData();
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <Header />
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View
            className="px-4 py-3 flex flex-row border-b border-black-200/10 items-center"
            onp
          >
            <View className=" flex flex-row flex-1 items-center">
              <View>
                <Fontisto name="blood-drop" size={24} color={"#a00113"} />
              </View>
              <View className="px-2">
                <Text className="text-base font-Ibold">{item.month}</Text>
                <Text>{item.year}</Text>
                <Text>{new Date(item.date).toLocaleString()}</Text>
              </View>
            </View>
            <Ionicons name="trash-outline" color="#a00113" size={20} />
          </View>
        )}
        // ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => (
          <EmptyState
            title="Pas d'enregistrement"
            subtitle="Veuillez créer un actuellement..."
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

export default Exportateurs;
