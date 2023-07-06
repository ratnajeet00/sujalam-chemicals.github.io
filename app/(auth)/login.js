import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../constants/colors.js";
import { AuthStore } from "../../store.js";

export default function LogIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login" }} />
      <Text style={styles.title}>Sujalam Chemicals</Text>
      <MaterialIcons name="login" size={90} color="white" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Employee ID"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = true;
          });
          router.replace("/(pages)/home");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    marginBottom: 50,
  },
  icon: {
    marginBottom: 75,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ffffff",
    borderWidth: 1,
    color: "#ffffff",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
