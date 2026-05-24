import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const FormFieldSelection = ({
  title,
  value = "",
  placeholder,
  handleChange,
  options = [],
  otherStyles = "",
  formInputStyle = "",
  ...props
}) => {
  return (
    <View className={otherStyles}>
      <Text className="text-base text-primary font-Iregular pt-1">{title}</Text>
      <View
        className={`w-full mt-2 h-12 px-4 bg-white rounded-xl border border-black-200/20 focus:border-secondary flex-row items-center ${formInputStyle}`}
        style={{ padding: 0 }}
      >
        <Picker
          selectedValue={value || ""}
          onValueChange={handleChange}
          style={{ flex: 1, height: 48, width: "100%" }}
          {...props}
        >
          <Picker.Item
            label={placeholder || "Sélectionnez une option"}
            value=""
            enabled={false}
          />
          {options.map((opt, idx) => (
            <Picker.Item key={idx} label={opt} value={opt} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default FormFieldSelection;
