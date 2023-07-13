import { useRouter } from "expo-router";
import { View } from "react-native";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { AuthStore } from "../../../store";

export default function Settings() {
  const router = useRouter();
  return (
    <View style={{ margin: 15 }}>
      <CustomButton
        text="Log Out"
        type="PRIMARY"
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false;
          });
          router.replace("/login");
        }}
      />
    </View>
  );
}
