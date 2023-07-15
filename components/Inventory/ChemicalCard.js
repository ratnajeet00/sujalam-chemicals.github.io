import { Feather } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const { height, width } = Dimensions.get("window");

const ChemicalCard = ({ item }) => {
  const editQty = () => {
    alert("Edit QTY");
  };

  return (
    <View style={styles.card}>
      <View style={styles.chemicalDetails}>
        <Text style={styles.name}>{item.item_name}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Type: {item.type}</Text>
      </View>
      <View style={styles.editQty}>
        <Pressable onPress={editQty}>
          <Feather name="edit-3" size={30} color={COLORS.primary} />
        </Pressable>
      </View>
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
  },
  chemicalDetails: {
    maxWidth: width * 0.7,
    minWidth: width * 0.7,
  },
  editQty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ChemicalCard;
