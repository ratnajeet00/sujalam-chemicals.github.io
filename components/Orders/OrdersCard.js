import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import API_URL from "../../API/API";

const OrderCard = ({
  item,
  showButtons,
  setShowButtons,
  isLastCard = false,
}) => {
  const handleAccept = () => {
    fetch(`${API_URL}transferData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: item.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        console.log("Data transfer successful");
        // Update the UI or perform any necessary actions after successful transfer
      })
      .catch((error) => {
        console.error("Error transferring data:", error);
      });
  };

  const handleReject = () => {
    fetch(`${API_URL}deleteData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: item.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        console.log("Data deletion successful");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <Pressable onPress={() => setShowButtons(item.id)}>
      <View style={[styles.card, isLastCard && styles.lastCard]}>
        <View>
          <Text style={styles.name}>{item.item_name}</Text>
          <Text>Qty: {item.quantity}</Text>
          <Text>Date of Ordering: {item.date_of_order}</Text>
          <Text>
            Date of Delivery:{" "}
            {item.dateOfDelivery ? item.date_of_delivery : "Not Delivered"}
          </Text>
          <Text>Client Name: {item.customer_name}</Text>
        </View>
        {showButtons && (
          <View style={styles.buttonContainer}>
            <Pressable style={styles.acceptButton} onPress={handleAccept}>
              <AntDesign name="check" size={25} color="white" />
            </Pressable>
            <Pressable style={styles.rejectButton} onPress={handleReject}>
              <FontAwesome name="trash" size={25} color="white" />
            </Pressable>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  lastCard: {
    marginBottom: 90,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: "space-between",
  },
  acceptButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  rejectButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrderCard;
