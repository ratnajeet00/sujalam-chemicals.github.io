import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLORS from "../../constants/colors";
import { StatusBar } from "expo-status-bar";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onSendConfirmation = () => {
    console.info("Send Confirmation", email);
  };
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{ headerShown: true, title: "Password Recovery" }}
      />
      <Text style={styles.text}>Enter your Email</Text>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomButton text="Send Confirmation" onPress={onSendConfirmation} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.bg,
    padding: 20,
    paddingTop: 100,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
