import { View, Text, ScrollView, Image, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, Redirect, router } from "expo-router";

import User from "../../lib/api/users";
import { useGlobalContext } from "../../context/GlobalProvider";

const user = new User();

const SignUp = () => {
  const { loading, isLogged } = useGlobalContext();
  const [form, setForm] = useState({
    email: null,
    password: null,
    name: null,
    phone: null,
  });

  const [isSubmitting, setSubmitting] = useState(false);

  if (!loading && isLogged) return <Redirect href="/dashboard" />;

  const submit = async () => {
    setSubmitting(true);
    if (!form.name || !form.email || !form.password) {
      Alert.alert(
        "Formulaire incorrecte !",
        "Veuillez remplir tous les champs du formulaire..."
      );
      return setSubmitting(false);
    }

    try {
      const res = await user.create(form);
      if (!res.data) {
        setSubmitting(false);
        Alert.alert(JSON.stringify(res.error));
      } else {
        Alert.alert(
          "Votre compte a été crée avec succes !",
          `Utilisez ${form.email} pour vous connecter et votre mot de passe.`
        );
        router.push("/sign-in");
      }
    } catch (error) {
      Alert.alert("Un prooblème est survenu !", error.message);
      setSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View
          className=" w-full  justify-center  h-full px-4 my-4"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="items-center">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[180px] h-[84px]"
            />
          </View>
          <View className="relative text-center w-full my-3">
            <Text className="text-3xl font-Iblack text-center text-primary">
              Créer un compte
              <Text className="text-secondary"> BintiBora</Text>
            </Text>
          </View>
          <FormField
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
            title="Numéro de  téléphone"
            placeholder={"Numéro de  téléphone"}
            value={form.phone}
            handleChangeText={(e) =>
              setForm({
                ...form,
                phone: e,
              })
            }
            otherStyles={"mt-4"}
            formInputStyle={""}
            keyboardType="phone"
          />
          <FormField
            title="Adresse email (Facultatif)"
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
            title="S'inscrire"
            handlePress={submit}
            containerStyles="w-full mt-6"
            buttonStyle="bg-secondary rounded-xl h-12 px-4  flex  justify-center items-center"
            textStyles="text-primary text-white font-Iblack block w-full text-xl"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-primary font-Iregular">
              Vous avez un compte ?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Se connecter
            </Link>
          </View>

          <View style={{ paddingTop: 50 }}>
            <Text className="text-center py-2">
              Powered by &copy; ZeSlap Platforms
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
