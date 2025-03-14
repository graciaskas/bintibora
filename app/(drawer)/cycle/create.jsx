import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SMS from "expo-sms";

import FormHeader from "../../../components/FormHeader";
import FormField from "../../../components/FormField";
import FormFieldDate from "../../../components/FormFieldDate";
import { useGlobalContext } from "../../../context/GlobalProvider";

import Cycle from "../../../lib/api/cycles";

const Create = () => {
  const { selectedDate, setSelectedDate, currentUser, getCycles } =
    useGlobalContext();

  const [user, setUser] = useState(JSON.parse(currentUser));
  const [form, setForm] = useState({
    date: null,
    user_id: user._id,
    year: new Date().getFullYear(),
  });
  const [isSubmitting, setSubmitting] = useState(false);

  const sendSMS = async (message) => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        user.phone,
        message
        // {
        //   attachments: {
        //     uri: "path/myfile.png",
        //     mimeType: "image/png",
        //     filename: "myfile.png",
        //   },
        // }
      );
      console.log(result);
    } else {
      Alert.alert("Impossible d'envoyer de SMS");
    }
  };

  const submit = async () => {
    setSubmitting(true);

    if (!form.date) {
      Alert.alert("Veillez selectionner une date");
      setSubmitting(false);
    }
    //Create request
    const res = await new Cycle().create(form);
    setSubmitting(false);

    if (!res.data) {
      Alert.alert("Un problème est survenu", res.error);
    } else {
      setSelectedDate(null);
      setForm({ ...form, date: null });

      //Send SMS
      // await sendSMS(res.data.message);
      //Locate to cyles
      getCycles().then((res) => {
        Alert.alert("Nouveau cyle crée  avec succes !");
        router.push("/cycle");
      });
    }
  };

  useEffect(() => {
    setForm({
      ...form,
      date: selectedDate,
    });
  }, [selectedDate]);

  useEffect(() => {
    console.log(selectedDate);
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Cycles menstruels",
        }}
      />
      <StatusBar style="light" backgroundColor="#a00113" />
      <ScrollView style={{ marginTop: -20 }}>
        <View>
          <FormHeader
            handleSubmit={submit}
            title={"Enregistrer un nouveau cycle"}
            isSubmitting={isSubmitting}
          />
          <View className="px-5 pb-10">
            {/* <FormFieldDate /> */}
            <FormField
              title="Date de début"
              placeholder={"Cliquer sur le calendrier =>"}
              type="date"
              editable={true}
              value={selectedDate}
              handleChangeText={(e) =>
                setForm({
                  ...form,
                  date: selectedDate,
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
