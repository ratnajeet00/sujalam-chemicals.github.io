import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.chemicalName}</Text>
      <Text>Qty: {item.qty}</Text>
      <Text>Date of Ordering: {item.dateOfOrdering}</Text>
      <Text>
        Date of Delivery:{" "}
        {item.dateOfDelivery ? item.dateOfDelivery : "Not Delivered"}
      </Text>
      <Text>Client Name: {item.clientName}</Text>
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

export default OrderCard;
