import { View } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Dashboard" }} />
    </View>
  );
}