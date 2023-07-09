import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const chemicals = [
  { id: "1", name: "Chemical A", expiryDate: "2023-07-10", quantity: 45 },
  { id: "2", name: "Chemical B", expiryDate: "2023-07-11", quantity: 23 },
  { id: "3", name: "Chemical C", expiryDate: "2023-07-12", quantity: 34 },
  { id: "4", name: "Chemical C", expiryDate: "2023-07-12", quantity: 40 },
  { id: "5", name: "Chemical C", expiryDate: "2023-07-12", quantity: 45 },
  { id: "6", name: "Chemical C", expiryDate: "2023-07-12", quantity: 60 },
  { id: "7", name: "Chemical C", expiryDate: "2023-07-12", quantity: 34 },
]; // Dummy data

const { height, width } = Dimensions.get("window");

const QuickViewPanel = ({ header }) => {
  const renderChemical = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemDetail}>{item.name}</Text>
      <Text style={styles.itemDetail}>Status: {item.quantity}</Text>
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
    columnGap: 70,
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  itemDetail: { fontSize: 16 },
  flatList: {
    height: height * 0.27,
  },
});

export default QuickViewPanel;
