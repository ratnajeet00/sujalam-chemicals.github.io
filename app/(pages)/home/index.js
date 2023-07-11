import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet, FlatList } from "react-native";
import QuickViewPanel from "../../../components/Dashboard/QuickViewPanel";
import CustomButton from "../../../components/CustomButton/CustomButton";

export default function home() {
  const router = useRouter;
  const onGenerateQR = () => {
    console.info("Generated QR");
  };
  const onScanQR = () => {
    console.info("Scanned QR");
  };
  return (
    <View style={{ margin: 15 }}>
      <QuickViewPanel header="Inventory" />
      <QuickViewPanel header="Orders" />
      <View style={styles.qr}>
        <CustomButton onPress={onGenerateQR} text="Generate QR" type="MEDIUM" />
        <CustomButton onPress={onScanQR} text="Scan QR" type="MEDIUM" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qr: { flexDirection: "row", justifyContent: "space-between" },
});
