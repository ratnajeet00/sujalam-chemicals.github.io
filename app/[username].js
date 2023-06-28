import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  const { name, lastName, email, username } = useGlobalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: name + " " + lastName,
        }}
      />
      <Text>
        Username: {name} (@{username})
      </Text>
      <Text>email: {email}</Text>
    </View>
  );
}
