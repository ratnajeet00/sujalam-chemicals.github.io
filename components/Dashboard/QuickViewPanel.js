import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const chemicals = [
  { id: "1", name: "Chemical A", expiryDate: "2023-07-10", quantity: 45 },
  { id: "2", name: "Chemical B", expiryDate: "2023-07-11", quantity: 23 },
  { id: "3", name: "Chemical C", expiryDate: "2023-07-12", quantity: 34 },
  { id: "4", name: "Chemical C", expiryDate: "2023-07-12", quantity: 40 },
  { id: "5", name: "Chemical C", expiryDate: "2023-07-12", quantity: 45 },
  { id: "6", name: "Chemical C", expiryDate: "2023-07-12", quantity: 60 },
  { id: "7", name: "Chemical C", expiryDate: "2023-07-12", quantity: 34 },
];

const QuickViewPanel = ({ header }) => {
  const renderChemical = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.item_detail}>{item.name}</Text>
        <Text style={styles.item_detail}>Exp Date: {item.expiryDate}</Text>
      </View>
      <View>
        <Text style={styles.item_detail}>Qty: {item.quantity}</Text>
        <Text style={styles.item_detail}>Status: {item.quantity}</Text> 
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        data={chemicals}
        renderItem={renderChemical}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.secondary,
    width: "100%",
    maxWidth: 500,
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
  },
  title: {
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 5,
    fontSize: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  item_detail: { fontSize: 16 },
  flatList: {
    height: 200,
  },
});

export default QuickViewPanel;
