import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.chemical_name}</Text>
      <Text>Qty: {item.quantity}</Text>
      <Text>Date of Ordering: {item.date_of_order}</Text>
      <Text>
        Date of Delivery:{" "}
        {item.dateOfDelivery ? item.date_of_delivery : "Not Delivered"}
      </Text>
      <Text>Client Name: {item.customer_name}</Text>
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
