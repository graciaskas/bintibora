import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  FlatList,
  SectionList,
  Image,
} from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

const Dashboard = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={{ paddingVertical: 15, paddingHorizontal: 8 }}>
            <Text className="font-Iblack pb-2 text-xl px-2">
              Mon Tableau de board
            </Text>
            {/* Block report */}
            <View className="flex flex-row p-2">
              {/* Block Menstrues */}
              <View className="bg-secondary-100/10 w-1/2 p-4 rounded-lg flex-row items-center justify-between">
                <View>
                  <Fontisto
                    name="blood-drop"
                    size={40}
                    color="#a00113"
                    className="text-right"
                  />
                </View>
                <View className="text-right">
                  <Text className="text-primary font-Iblack text-lg">
                    Mes Cycles
                  </Text>
                  <Text className="text-primary font-Iblack text-lg">
                    500.4k
                  </Text>
                </View>
              </View>
              {/* Block Ovulation */}
              <View className="ml-2 bg-secondary-100/10 w-1/2 p-4 rounded-lg flex-row items-center justify-between">
                <View>
                  <MaterialCommunityIcons
                    name="baby-face-outline"
                    size={40}
                    color="#000"
                    className="text-right"
                  />
                </View>
                <View className="text-right">
                  <Text className="text-primary font-Iblack text-lg">
                    Ovulations
                  </Text>

                  <Text className="text-primary font-Iblack text-lg">50k</Text>
                </View>
              </View>
            </View>

            {/* Block fecondité */}
            <View className="px-2 py-2">
              <Text className="text-primary font-Iblack text-xl pb-4 px-2">
                Dates de fécondité recentes
              </Text>
              <View className=" overflow-hidden bg-white border border-black-100/5 rounded-lg">
                {[1, 2, 3, 4, 5].map((i) => (
                  <View
                    className=" flex-row items-center   p-3 py-2 border-b border-primary/5"
                    key={i}
                  >
                    <View>
                      <MaterialCommunityIcons
                        name="baby-face-outline"
                        size={30}
                        color="#000"
                        className="text-right"
                      />
                    </View>
                    <View className="px-3 relative w-full">
                      <Text className="font-Iblack ">Novembre</Text>
                      <Text className="absolute bottom-1/2 right-10 bg-primary/30 text-white text-sm font-Ibold rounded-lg px-2">
                        2024
                      </Text>
                      <Text>12/11/2024</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            {/* Block cycles */}
            <View className="px-2 py-2">
              <Text className="text-primary font-Iblack text-xl pb-4 px-2">
                Cycles menstruels recents
              </Text>
              <View className=" overflow-hidden bg-white border border-black-100/5 rounded-lg">
                {[1, 2, 3, 4, 5].map((i) => (
                  <View
                    className=" flex-row items-center   p-3 py-2 border-b border-primary/5"
                    key={i}
                  >
                    <View>
                      <Fontisto name="blood-drop" size={30} color={"#a00113"} />
                    </View>
                    <View className="px-3 relative w-full">
                      <Text className="font-Iblack ">Novembre</Text>
                      <Text className="absolute bottom-1/2 right-10 bg-primary/30 text-white text-sm font-Ibold rounded-lg px-2">
                        2024
                      </Text>
                      <Text>12/11/2024</Text>
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

export default Dashboard;
