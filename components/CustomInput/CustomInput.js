import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import COLORS from "../../constants/colors";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
  type,
}) => (
  <View style={[styles.container, styles[`container_${type}`]]}>
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={[styles.input, styles[`input_${type}`]]}
      placeholderTextColor={"gray"}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: COLORS.accent,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
  },
  container_data: {
    backgroundColor: COLORS.bg,
    borderRadius: 10,
  },
  input: { color: "white" },
});

export default CustomInput;
