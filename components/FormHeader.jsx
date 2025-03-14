import { View, Text } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const FormHeader = ({ title, handleSubmit, isSubmitting }) => {
  return (
    <View style={{ padding: 20, marginTop: -15 }} className="pr-6">
      <Text className="text-xl py-2 font-Iblack">{title}</Text>
      <View className="flex-row gap-6 py-3" style={{ paddingRight: 10 }}>
        <CustomButton
          title={"Enregistrer"}
          containerStyles="bg-black-100 text-white w-1/2 p-3 rounded-lg"
          handlePress={handleSubmit}
          isLoading={isSubmitting}
        />
        <CustomButton
          title={"Annuler"}
          containerStyles="bg-slate-300 text-primary w-1/2 p-3 rounded-lg"
          handlePress={() => router.back()}
        />
      </View>
    </View>
  );
};

export default FormHeader;
