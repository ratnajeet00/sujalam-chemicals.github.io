import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../../components/CustomInput/CustomInput";
import COLORS from "../../../constants/colors";

const { width, height } = Dimensions.get("window");

export default function AddOrder() {
  const router = useRouter();
  const [customer_name, setCustomerName] = useState("");
  const [item_name, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCreateOrder = () => {
    fetch("https://dec8-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_name,
        item_name,
        quantity,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order created successfully");
        // Navigate back to the previous screen
        router.back();
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create new order</Text>
      <CustomInput
        value={customer_name}
        setValue={setCustomerName}
        placeholder="Customer Name"
        type={"data"}
      />
      <CustomInput
        value={item_name}
        setValue={setItemName}
        placeholder="Item Name"
        type={"data"}
      />
      <CustomInput
        value={quantity}
        setValue={setQuantity}
        placeholder="Quantity"
        type={"data"}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign name="back" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.createButton} onPress={handleCreateOrder}>
          <Text style={styles.createButtonText}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    marginVertical: 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    width: width * 0.2,
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
  },
  createButton: {
    marginVertical: 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    width: width * 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    color: "white",
    fontSize: 20,
  },
});