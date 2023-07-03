import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title: "Dashboard" }} />
      <Text>Dashboard</Text>
    </View>
  );
}
