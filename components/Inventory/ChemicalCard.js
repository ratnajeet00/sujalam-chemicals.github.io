import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../../constants/colors";
import API_URL from "../../API/API";


const API_for_Edit = `${API_URL}updateItem`;

const ChemicalCard = ({ item, showButtons, setShowButtons }) => {
  const [newQuantity, setNewQuantity] = useState("");

  const handlePress = () => {
    setShowButtons(item.id === showButtons ? null : item.id);
    setNewQuantity("");
  };

  const handleSave = () => {
    if (newQuantity.trim() === "") {
      alert("Please enter a valid quantity");
      return;
    }

    const updatedItem = {
      ...item,
      quantity: parseInt(newQuantity),
    };

    // Update item on the server
    fetch(API_for_Edit, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Item updated successfully") {
          console.log("Item updated successfully");
        } else if (data.message === "Item not found") {
          console.log("Item not found");
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:",error);
      });

    setNewQuantity("");
  };

  const isEditing = item.id === showButtons;

  return (
    <View style={styles.card}>
      <View style={styles.chemicalDetails}>
        <Text style={styles.name}>{item.item_name}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Type: {item.type}</Text>
      </View>
      {isEditing && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Quantity"
            keyboardType="numeric"
            value={newQuantity}
            onChangeText={setNewQuantity}
          />
          <Pressable style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
        </View>
      )}
      {!isEditing && (
        <Pressable style={styles.editButton} onPress={handlePress}>
          <Feather name="edit-3" size={25} color={COLORS.primary} />
        </Pressable>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chemicalDetails: {
    maxWidth: 200, // Adjust the value as needed
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    padding: 5,
    width: 120,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 20,
    marginTop: 1,
    marginLeft:40
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  editButton: {
    marginLeft: 40,
  },
});

export default ChemicalCard;
