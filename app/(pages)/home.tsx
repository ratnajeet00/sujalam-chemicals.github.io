import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/login">Login</Link>
    </View>
  );
}
