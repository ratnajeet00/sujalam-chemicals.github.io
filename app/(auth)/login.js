import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import LOGO from "../../assets/LOGO.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLORS from "../../constants/colors";
import {AuthStore} from "../../store.js"

export default function LogIn() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const [username, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = async () => {
    try {
      const body = JSON.stringify({
        username: username,
        password: password,
      });

      const response = await fetch("https://eminent-quickest-menu.glitch.me/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
   
      const data = await response.json();
      if (data.message) {
        AuthStore.update((s) => {
          s.isLoggedIn = true;
        });
        router.replace("/(pages)/home");
      }
    } catch (error) {
      console.error(error);
    }
   
  };

  const onForgotPasswordPressed = () => {
    router.push("/forgotPassword");
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Image
        source={LOGO}
        resizeMode="contain"
        style={[styles.logo, { height: height * 0.3 }]}
      />
      <CustomInput
        placeholder="Employee ID"
        value={username}
        setValue={setEmployeeId}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton onPress={onSignInPressed} text="Sign In" type="PRIMARY" />
      <CustomButton
        onPress={onForgotPasswordPressed}
        text="Forgot password?"
        type="TERTIARY"
      />
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
  logo: {
    width: "70%",
    maxWidth: 300,
  },
});
