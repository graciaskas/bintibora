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
import { useGlobalContext } from "../../../context/GlobalProvider";
import images from "../../../constants/images";

import * as ImagerPicker from "expo-image-picker";
import FormField from "../../../components/FormField";
import CustomButton from "../../../components/CustomButton";

const User = () => {
  const { currentUser, signout, selectedDate } = useGlobalContext();
  const [user, setUser] = useState(JSON.parse(currentUser));
  const [image, setImage] = useState(images.profile);
  const [imgLocal, setImgLocal] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    birth_date: user?.birth_date,
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagerPicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImgLocal(false);
    }
  };

  const submit = async () => {};

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Modifier le profile",
          }}
        />
        <ScrollView className="bg-white" style={{ marginTop: -60 }}>
          <ImageBackground
            source={images.userBackground}
            className="w-full flex-1 h-full"
            style={{
              height: "45%",
            }}
          >
            {/* Block account setting */}
            <View
              className="account p-4 "
              style={{ marginVertical: 22, alignItems: "center" }}
            >
              <TouchableOpacity
                className="flex flex-row  items-center justify-between border-primary/5 border-b"
                style={{
                  paddingVertical: 14,
                  paddingLeft: 12,
                }}
                onPress={pickImage}
              >
                <Image
                  source={imgLocal ? image : { uri: image }}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 85,
                    borderWidth: 5,
                    borderColor: "#fff",
                  }}
                />

                <View className="absolute bottom-5 right-4 z-[9999] bg-white p-2 rounded-full">
                  <Ionicons name="camera-outline" size={24} />
                </View>
              </TouchableOpacity>
              <View className="py-3">
                <Text className="font-Iblack text-xl text-white">
                  {user.name}
                </Text>
              </View>
            </View>

            <View className="p-5">
              <FormField
                editable={true}
                title="Prénom et nom de la famille"
                value={form.name}
                placeholder={"Nom complet "}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    name: e,
                  })
                }
                otherStyles={"mt-4"}
                keyboardType="name"
                formInputStyle={
                  "w-full mt-2 h-12 px-4 bg-gray rounded-2xl border-2 border-black-200/20 focus:border-secondary flex flex-row items-center"
                }
              />
              <FormField
                title="Numéro de téléphone"
                editable={true}
                value={form.phone}
                placeholder={"Numéro de téléphone"}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    phone: e,
                  })
                }
                otherStyles={"mt-4"}
                keyboardType="phone"
                formInputStyle={
                  "w-full mt-2 h-12 px-4 bg-gray rounded-2xl border-2 border-black-200/20 focus:border-secondary flex flex-row items-center"
                }
              />

              <FormField
                title="Adresse email"
                editable={true}
                value={form.email}
                placeholder={"Adresse email"}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    email: e,
                  })
                }
                otherStyles={"mt-4"}
                keyboardType="email-address"
                formInputStyle={
                  "w-full mt-2 h-12 px-4 bg-gray rounded-2xl border-2 border-black-200/20 focus:border-secondary flex flex-row items-center"
                }
              />

              <FormField
                title="Date de naissance"
                value={form.birth_date}
                placeholder={"Cliquer sur le calendrier =>"}
                type="date"
                disabled={true}
                editable={true}
                handleChangeText={(e) =>
                  setForm({
                    ...form,
                    birth_date: selectedDate,
                  })
                }
                otherStyles={"mt-4"}
                keyboardType="birth_date"
                formInputStyle={
                  "w-full mt-2 h-12 px-4 bg-gray rounded-2xl border-2 border-black-200/20 focus:border-secondary flex flex-row items-center"
                }
              />

              <CustomButton
                title="Modifier le profile"
                handlePress={submit}
                containerStyles="w-full mt-6"
                buttonStyle="bg-secondary rounded-xl h-12 px-4  flex  justify-center items-center"
                textStyles="text-primary text-white font-Iblack block w-full text-xl"
                isLoading={isSubmitting}
              />
            </View>
          </ImageBackground>

          <StatusBar style="light" backgroundColor="#a00113" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default User;

{
  /* Block account setting */
}
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
        <Text className="ml-8 text-base  font-Ibold">Modifier le profile</Text>
      </View>
      <View className="px-3">
        <Ionicons name="chevron-forward-outline" size={24} color={"#000"} />
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
        <Ionicons name="shield-half-outline" size={24} color={"#000"} />
        <Text className="ml-8 text-base  font-Ibold">Securité</Text>
      </View>
      <View className="px-3">
        <Ionicons name="chevron-forward-outline" size={24} color={"#000"} />
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
        <Ionicons name="notifications-outline" size={24} color={"#000"} />
        <Text className="ml-8 text-base  font-Ibold">Notifications</Text>
      </View>
      <View className="px-3">
        <Ionicons name="chevron-forward-outline" size={24} color={"#000"} />
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
        <Ionicons name="lock-closed-outline" size={24} color={"#000"} />
        <Text className="ml-8 text-base  font-Ibold">Confidentialité</Text>
      </View>
      <View className="px-3">
        <Ionicons name="chevron-forward-outline" size={24} color={"#000"} />
      </View>
    </TouchableOpacity>
  </View>
</View>;
