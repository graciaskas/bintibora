import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from "./CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { setSelectedDate } = useGlobalContext();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setSelectedDate(selectedDate.toLocaleDateString());
    hideDatePicker();
  };

  return (
    <View>
      <CustomButton
        title={"Selectionner la date"}
        containerStyles="bg-secondary text-white my-4 p-3 rounded-lg"
        handlePress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        locale="FR"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimePicker;
