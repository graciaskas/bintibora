import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, Redirect, router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalContext } from "../../context/GlobalProvider";

import User from "../../lib/api/users";
const user = new User();

const Signin = () => {
  const { loading, isLogged, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: null,
    password: null,
  });

  if (!loading && isLogged) return <Redirect href="/dashboard" />;

  const submit = async () => {
    setSubmitting(true);
    if (!form.email || !form.password) {
      Alert.alert(
        "Formulaire incorrecte !",
        "Veuillez remplir tous les champs du formulaire..."
      );
      return setSubmitting(false);
    }

    try {
      const res = await user.login(form);

      if (!res.data) {
        setSubmitting(false);
        Alert.alert("Impossible de se connecter", res.error);
      } else {
        setIsLogged(true);
        Alert.alert(
          "Connexion reussi avec succes !",
          `Bienvenu ${res.data.user?.name} dans votre application BintiBora.`
        );

        //Store current user in AsyncStorage
        await AsyncStorage.setItem(
          "currentUser",
          JSON.stringify({
            ...res.data.user,
            token: res.data.token,
          })
        );

        //Locate to dashboard
        router.push("/dashboard");
      }
    } catch (error) {
      Alert.alert("Un problème est survenu !", error.message);
      setSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className=" w-full  justify-center  min-h-[85vh] px-4 my-6">
          <View className="items-center">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[200px] h-[84px]"
            />
          </View>
          <View className="relative text-center w-full my-3">
            <Text className="text-3xl font-Iblack text-center text-primary">
              Connectez-vous à<Text className="text-secondary"> BintiBora</Text>
            </Text>
          </View>
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
            title="Password"
            placeholder={"Mot de passe"}
            value={form.password}
            editable={true}
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            otherStyles={"mt-4"}
            formInputStyle={""}
            keyboardType="password"
          />

          <CustomButton
            title="Se connecter"
            handlePress={submit}
            containerStyles="w-full mt-6"
            buttonStyle="bg-secondary rounded-xl h-12 px-4  flex  justify-center items-center"
            textStyles="text-primary text-white font-Iblack block w-full text-xl"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-primary font-Iregular">
              Vous n'avez pas de compte ?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              S'inscrire
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
