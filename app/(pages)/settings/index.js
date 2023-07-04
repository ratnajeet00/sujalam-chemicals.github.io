import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import { AuthStore } from "../../../store";

export default function Settings() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.replace("/login");
        }}
        title="LOGOUT"
      />
    </View>
  );
}
