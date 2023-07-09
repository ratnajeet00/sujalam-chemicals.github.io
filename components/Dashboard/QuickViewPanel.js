import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const chemicals = [
  { id: "1", name: "Chemical A", expiryDate: "2023-07-10" },
  { id: "2", name: "Chemical B", expiryDate: "2023-07-11" },
  { id: "3", name: "Chemical C", expiryDate: "2023-07-12" },
  { id: "4", name: "Chemical C", expiryDate: "2023-07-12" },
  { id: "5", name: "Chemical C", expiryDate: "2023-07-12" },
  { id: "6", name: "Chemical C", expiryDate: "2023-07-12" },
  { id: "7", name: "Chemical C", expiryDate: "2023-07-12" },
];

const QuickViewPanel = ({ header }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>Expiry Date: {item.expiryDate}</Text>
    </View>
  );

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        data={chemicals}
        renderItem={renderItem}
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
    borderBottomWidth: 1,
    fontSize: 20,
  },
  item: {
    // your styles here
  },
  flatList: {
    height: 240,
  },
});

export default QuickViewPanel;
