import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLORS from "../../constants/colors";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const onSendConfirmation = () => {
    console.info("Send Confirmation", email);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Enter your Email</Text>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomButton
        text="Send New Password"
        onPress={onSendConfirmation}
      />
      <CustomButton
        onPress={() => {
          router.back();
        }}
        text="Back to Login"
        type="TERTIARY"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.bg,
    padding: 20,
    paddingTop: 100,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
