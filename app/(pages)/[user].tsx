import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { AuthStore } from "../../store";

export default function Profile() {
  const router = useRouter();
  const { user, name, lastName, email } = useGlobalSearchParams();
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
      <Button
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.replace("/");
        }}
        title="LOGOUT"
      />
    </View>
  );
}
