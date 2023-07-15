import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const AddOrder = () => {
  const router = useRouter();
  const handleAddOrder = () => {
    router.push("/orders/addOrder");
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleAddOrder}>
        <MaterialIcons name="post-add" size={30} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: COLORS.accent,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 1,
    width: 60,
    height: 60,
    top: height * 0.75,
    left: width * 0.75,
  },
});

export default AddOrder;
