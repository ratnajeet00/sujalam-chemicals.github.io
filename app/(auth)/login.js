import { Text, View } from "react-native";
import { AuthStore } from "../../store.js";
import { Stack, useRouter } from "expo-router";

export default function LogIn() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Login" }} />
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
  );
}
