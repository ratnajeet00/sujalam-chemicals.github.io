import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => (
  <Pressable
    onPress={onPress}
    style={[styles.container, styles[`container_${type}`]]}
  >
    <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: { backgroundColor: COLORS.primary },
  container_MEDIUM: {
    backgroundColor: COLORS.primary,
    width: "48%",
    borderColor: COLORS.accent,
    borderWidth: 1,
  },
  text_PRIMARY: { fontWeight: "bold", color: "white" },
  text_TERTIARY: { color: "gray" },
});

export default CustomButton;
