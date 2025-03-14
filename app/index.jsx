import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Index() {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/dashboard" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 relative">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[200px] h-[84px]"
          />
          <View className="relative text-center w-full my-2">
            <Text className="text-4xl font-Iblack text-center text-primary py-4">
              Pour une période de
              <Text className="text-secondary-200"> fécondité </Text>
              feminine maitrisée
            </Text>
            <Text className="font-Iregular text-center mt-3 text-lg text-primary">
              &quot; La meilleure application mobile de suivi du cycle menstruel
              de la femme, la jeune fille et de l&apos;éducation complète à la
              sexualité en république démocratique du Congo. &quot;
            </Text>
          </View>
          <CustomButton
            title="Se connecter"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            buttonStyle="bg-secondary rounded-xl h-12 px-4  flex  justify-center items-center"
            textStyles="text-primary text-white font-Iblack block w-full text-xl"
          />

          <View className="absolute bottom-[-55px]">
            <Text className="font-Ibold text-sm ">
              Powered by{" "}
              <Link href={"https://zeslap.com"}>&copy;ZeSlap Platforms</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" backgroundColor="#fff" />
    </SafeAreaView>
  );
}
