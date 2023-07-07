import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function home() {
  const router = useRouter;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Inventory quick View</Text>
      <Text>Orders quick View</Text>
      <Button
        title="Scan QR"
        onPress={() => {
          // 
        }}
      />
      <Button
        title="Generate QR"
        onPress={() => {
          // 
        }}
      />
    </View>
  );
}
