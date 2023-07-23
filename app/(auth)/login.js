import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import API_URL from "../../API/API";
import LOGO from "../../assets/LOGO.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLORS from "../../constants/colors";
import { AuthStore } from "../../store.js";

const LOGIN_API_ENDPOINT = `${API_URL}login`;

export default function LogIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { height } = useWindowDimensions();
  const [username, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    setIsLoading(true);
    try {
      const body = JSON.stringify({
        username: username,
        password: password,
      });

      const response = await fetch(LOGIN_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await response.json();
      if (response.ok && data.message === "success") {
        AuthStore.update((s) => {
          s.isLoggedIn = true;
        });
        router.replace("/(pages)/home");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  const onForgotPasswordPressed = () => {
    // router.push("/forgotPassword");
    alert("Chill bro, just remember your password.")
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Image
        source={LOGO}
        resizeMode="contain"
        style={[styles.logo, { height: height * 0.3 }]}
      />
      <View style={styles.formContainer}>
        <CustomInput
          placeholder="Employee ID"
          value={username}
          setValue={setEmployeeId}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton
          onPress={handleSignIn}
          text="Sign In"
          type="PRIMARY"
          disabled={isLoading}
        />
        {isLoading && <ActivityIndicator size="large" />}
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type="TERTIARY"
          disabled={isLoading}
        />
      </View>
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
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
});
