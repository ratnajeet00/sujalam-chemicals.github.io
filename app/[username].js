import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  const { name, username } = useGlobalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: `Welcome ${name}`,
        }}
      />
      <Text>
        Username: {name} (@{username})
      </Text>
    </View>
  );
}
