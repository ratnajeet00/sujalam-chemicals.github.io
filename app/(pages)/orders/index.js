import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import AddOrder from "../../../components/Orders/AddOrder";
import OrderCard from "../../../components/Orders/OrdersCard";

const ORDERS_API_ENDPOINT =
  "https://dbd4-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/orderlist";

export default function Orders() {
  const [activeCard, setActiveCard] = useState(null);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    fetchOrdersData();
    const interval = setInterval(fetchOrdersData, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchOrdersData = async () => {
    try {
      const response = await fetch(ORDERS_API_ENDPOINT);
      const data = await response.json();
      setSortedData(data);
    } catch (error) {
      console.error("Error fetching orders data:", error);
    }
  };

  const sortData = (key) => {
    const orderMultiplier = sortOrder === "asc" ? 1 : -1;
    const sorted = [...sortedData].sort((a, b) =>
      a[key] < b[key]
        ? -1 * orderMultiplier
        : a[key] > b[key]
        ? 1 * orderMultiplier
        : 0
    );

    setSortedData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSelectedFilter(key);
  };

  const ordersFilterOptions = [
    { text: "Chemical Name", onPress: () => sortData("chemicalName") },
    { text: "Qty", onPress: () => sortData("qty") },
    { text: "Date of Ordering", onPress: () => sortData("dateOfOrdering") },
    { text: "Date of Delivery", onPress: () => sortData("dateOfDelivery") },
    { text: "Client Name", onPress: () => sortData("clientName") },
  ];

  const renderOrderCards = () => {
    if (sortedData.length === 0) {
      return (
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
            color: "#999",
          }}
        >
          No inventory data available
        </Text>
      );
    }

    return sortedData.map((item, index) => (
      <OrderCard
        key={index}
        item={item}
        showButtons={activeCard === item.id}
        setShowButtons={setActiveCard}
      />
    ));
  };

  return (
    <View style={{ margin: 15, paddingBottom: 40 }}>
      <FilteredSearch placeholder="Order" filterOptions={ordersFilterOptions} />
      <AddOrder />
      <ScrollView>{renderOrderCards()}</ScrollView>
    </View>
  );
}
