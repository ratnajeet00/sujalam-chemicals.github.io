import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import SimpleInput from "../../components/Inputs/SimpleInput.js";
import { AuthStore } from "../../store.js";

export default function LogIn() {
  const router = useRouter();
  return (
    <>
      <StatusBar style="dark" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Stack.Screen options={{ title: "Login" }} />
        <SimpleInput />
        <Text
          onPress={() => {
            AuthStore.update((s) => {
              s.isLoggedIn = true;
            });
            router.replace("/(pages)/home");
          }}
        >
          Login
        </Text>
      </View>
    </>
  );
}
