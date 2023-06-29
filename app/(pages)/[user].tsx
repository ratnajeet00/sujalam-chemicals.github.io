import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  const { user, name, lastName, email } = useGlobalSearchParams();
  console.log(user, name, lastName, email);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          headerTitle: name + " " + lastName,
        }}
      />
      <Text>
        Username: {name} (@{user})
      </Text>
      <Text>email: {email}</Text>
    </View>
  );
}
