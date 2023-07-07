import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import COLORS from "../../constants/colors";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => (
  <View style={styles.container}>
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
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
    marginVertical: 20,
  },
  input: { color: "white" },
});

export default CustomInput;
