import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChemicalCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Date of Manufacture: {item.dateOfManufacture}</Text>
      <Text>Date of Expiry: {item.dateOfExpiry}</Text>
      <Text>Type: {item.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ChemicalCard;
