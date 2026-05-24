import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import icons from "../constants/icons";
import { useGlobalContext } from "../context/GlobalProvider";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";

const FormField = ({
  title,
  value = "",
  placeholder,
  handleChangeText,
  otherStyles,
  formInputStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    showDatePicker,
    handleConfirm,
    isDatePickerVisible,
    hideDatePicker,
    selectedDate,
  } = useGlobalContext();

  return (
    <View className={`${otherStyles}`}>
      <Text className="text-base text-primary font-Iregular pt-1">{title}</Text>

      <View
        style={
          !props.editable && {
            backgroundColor: "#eee",
          }
        }
        className={`w-full mt-2 h-12 py-0 px-4 bg-white rounded-xl border border-black-200/20 focus:border-secondary flex-row items-center`}
      >
        <TextInput
          className="flex-1  text-lg font-Iregular outline-none"
          value={value}
          placeholder={props.editable ? placeholder : ""}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {(props.type == "date") && props.editable && (
          <TouchableOpacity onPress={showDatePicker}>
            <Ionicons name="calendar-number-outline" size={24} color={"#aaa"} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              locale="FR"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
