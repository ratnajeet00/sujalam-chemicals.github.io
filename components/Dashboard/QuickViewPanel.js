import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const { height, width } = Dimensions.get("window");

const QuickViewPanel = ({ header, data }) => {
  const renderChemical = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemDetail}>{item.item_name}</Text>
      <Text style={styles.itemDetail}>Status: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{header}</Text>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderChemical}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
          scrollEnabled={true}
        />
      ) : (
        <Text>No data available</Text>
      )}
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
