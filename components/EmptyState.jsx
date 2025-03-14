import { router, usePathname } from "expo-router";
import { View, Text, Image, Dimensions } from "react-native";

import CustomButton from "./CustomButton";
import images from "../constants/images";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const EmptyState = ({ title, subtitle }) => {
  const pathname = usePathname();

  return (
    <View
      className="flex-1 flex flex-col justify-center items-center p-6 h-full "
      style={{ height: screenHeight - 60, marginTop: -50 }}
    >
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[150px] h-[200px]"
      />

      <Text className="text-2xl font-Iblack text-primary ">{title}</Text>
      <Text className="text-base text-center font-Iregular text-primary mt-2">
        {subtitle}
      </Text>

      {pathname !== "/ovulations" && (
        <CustomButton
          title="Créer un enregistrement"
          handlePress={() => router.push(pathname + "/create")}
          containerStyles="w-full my-5 bg-secondary py-3 px-4 rounded-lg font-Ibold"
        />
      )}
    </View>
  );
};

export default EmptyState;
