import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import API_URL from "../../../API/API";
import CustomInput from "../../../components/CustomInput/CustomInput";
import COLORS from "../../../constants/colors";

const { width, height } = Dimensions.get("window");

export default function AddOrder() {
  const router = useRouter();
  const [customer_name, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        "https://sujalam-chem--ratnajeet00.repl.co/itemlist"
      );
      let data = await response.json();
      data = data.sort((a, b) => a.item_name.localeCompare(b.item_name));
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleCreateOrder = async () => {
    try {
      const response = await fetch(`${API_URL}addOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name,
          item_name: selectedItem,
          quantity,
        }),
      });
      const data = await response.json();
      alert("Order created successfully!");
      router.back();
    } catch (error) {
      console.error("Error creating order:", error);
    }
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
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.id}
              label={item.item_name}
              value={item.item_name}
            />
          ))}
        </Picker>
      </View>
      <CustomInput
        value={quantity}
        setValue={setQuantity}
        placeholder="Quantity"
        type={"data"}
        onlyNumbers
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
  pickerContainer: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: COLORS.bg,
  },
  picker: {
    color: "gray",
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
