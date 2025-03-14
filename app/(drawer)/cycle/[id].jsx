import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack, useLocalSearchParams } from "expo-router";
import FormHeader from "../../../components/FormHeader";
import Cycle from "../../../lib/api/cycles";
import FormField from "../../../components/FormField";
import { useGlobalContext } from "../../../context/GlobalProvider";
import { formatDate } from "../../../lib/lib";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SingleCycle = () => {
  const { id } = useLocalSearchParams();
  const [isSubmitting, setSubmitting] = useState(false);
  const [ovulations, setOvulations] = useState([]);
  const [form, setForm] = useState({
    date: "",
    date_end: "",
    date_endcycle: "",
    month: "",
    year: "",
    createdAt: "",
    updatedAt: "",
    duration: "",
    id,
  });

  const { selectedDate } = useGlobalContext();
  const submit = async () => {
    setSubmitting(true);

    if (!form.date) {
      Alert.alert("Veillez selectionner une date");
      setSubmitting(false);
    }
    //Create request
    const res = await new Cycle().update(form);
    setSubmitting(false);

    if (!res.data) {
      Alert.alert("Un problème est survenu", res.error);
    } else {
      setSelectedDate(null);
      setForm({ ...form, date: null });
      Alert.alert("Cyle menstruel mis à jour  avec succes !");
      //Locate to cyles
      router.push("/cycle");
    }
  };

  useEffect(() => {
    new Cycle()
      .get(id)
      .then((res) => {
        setForm({
          ...form,
          ...res.data?.cycle,
        });

        setOvulations(res.data?.ovulations);
      })
      .catch((error) => {
        Alert.alert("Un problème est survenu!", error.message);
      });
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "Cycle menstruel",
          headerShown: true,
        }}
      />
      <StatusBar style="light" backgroundColor="#a00113" />
      <ScrollView style={{ marginTop: -20 }}>
        <View
          className="flex-1 bg-white h-screen"
          style={{ minHeight: "100vh", height: "100vh" }}
        >
          <FormHeader
            handleSubmit={submit}
            title={"Modifier le cycle existant"}
            isSubmitting={isSubmitting}
          />
          <View className="px-5 pb-10">
            <Text className="bg-yellow-100 p-4 rounded-lg border border-black-200/5 mb-2">
              Vous ne pouvez qu'une seule fois définir la date du dernier jour
              des règles.
            </Text>
            {/* <FormFieldDate /> */}
            <FormField
              title="Premier jour des règles (Début du cycle)"
              placeholder={"Cliquer sur le calendrier =>"}
              type="date"
              editable={false}
              value={formatDate(form.date)}
              handleChangeText={(e) =>
                setForm({
                  ...form,
                  date: e,
                })
              }
            />

            <FormField
              title="Dernier jour des règles"
              placeholder={"Cliquer sur le calendrier =>"}
              type="date"
              editable={true}
              value={selectedDate}
              handleChangeText={(e) =>
                setForm({
                  ...form,
                  date_end: selectedDate,
                })
              }
            />

            <View className="flex flex-row items-center justify-between gap-4 py-2 pr-4">
              <FormField
                title="Mois"
                placeholder={"Mois"}
                type="text"
                editable={false}
                value={form.month}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    month: e,
                  })
                }
                otherStyles="w-[50%]"
              />
              <FormField
                title="Année"
                placeholder={"Année"}
                type="text"
                editable={false}
                value={form.year?.toString()}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    year: e,
                  })
                }
                otherStyles="w-[50%]"
              />
            </View>

            <View className="flex flex-row items-center justify-between gap-4 py-2 pr-4">
              <FormField
                title="Crée le (MM/DD/YY)"
                placeholder={"Année"}
                type="text"
                editable={false}
                value={formatDate(form.createdAt)}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    createdAt: e,
                  })
                }
                otherStyles="w-[50%]"
              />
              <FormField
                title="Mise à jour le"
                placeholder={"Dernière mise à jour le"}
                type="text"
                editable={false}
                value={formatDate(form?.updatedAt)}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    updatedAt: e,
                  })
                }
                otherStyles="w-[50%]"
              />
            </View>

            <FormField
              title="Fin du cycle (Depend du cycle prochain)"
              placeholder={"Cliquer sur le calendrier =>"}
              type="date"
              editable={false}
              value={formatDate(form.date_endcycle)}
              handleChangeText={(e) =>
                setForm({
                  ...form,
                  date_endcycle: e,
                })
              }
            />
            <FormField
              title="Durée du cycle"
              placeholder={"Durée du cycle"}
              type="date"
              editable={false}
              value={form.duration}
              handleChangeText={(e) =>
                setForm({
                  ...form,
                  duration: e,
                })
              }
            />
          </View>

          <View className="pb-3 px-5">
            <Text className="text-xl font-Ibold border-b border-black-200/10 py-3">
              Dates de fértilité
            </Text>
            {ovulations.map((item) => (
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleCycle;
