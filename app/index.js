import { Link } from "expo-router";
import { View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="(auth)/login">Login</Link>
    </View>
  );
}
