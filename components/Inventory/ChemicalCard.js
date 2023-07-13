import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChemicalCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.item_name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Date of Manufacture: {item.date_of_manufacture}</Text>
      <Text>Date of Expiry: {item.date_of_expiry}</Text>
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
