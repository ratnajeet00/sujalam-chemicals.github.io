import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import API_URL from "../../../API/API";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import AddOrder from "../../../components/Orders/AddOrder";
import OrderCard from "../../../components/Orders/OrdersCard";

const ORDERS_API_ENDPOINT = `${API_URL}orderList`;

export default function Orders() {
  const [activeCard, setActiveCard] = useState(null);
  const [ordersData, setOrdersData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchOrdersData();
    const interval = setInterval(fetchOrdersData, 20000);
    return () => clearInterval(interval);
  }, []);

  const fetchOrdersData = async () => {
    try {
      const response = await fetch(ORDERS_API_ENDPOINT);
      const data = await response.json();
      setOrdersData(data);
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

  const handleSearch = (text) => {
    setSearchText(text);

    if (text.length === 0) {
      setSortedData(ordersData);
    } else {
      const filteredData = ordersData.filter((item) =>
        item.item_name.toLowerCase().includes(text.toLowerCase())
      );
      setSortedData(filteredData);
    }
  };

  const ordersFilterOptions = [
    { text: "Chemical Name", onPress: () => sortData("item_name") },
    { text: "Qty", onPress: () => sortData("quantity") },
    { text: "Date of Ordering", onPress: () => sortData("date_of_order") },
    { text: "Date of Delivery", onPress: () => sortData("date_of_delivery") },
    { text: "Client Name", onPress: () => sortData("customer_name") },
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
        isLastCard={index === sortedData.length - 1} // Set isLastCard to true for the last card
      />
    ));
  };
  
  return (
    <View style={{ margin: 15, paddingBottom: 40 }}>
      <FilteredSearch
        placeholder="Order"
        filterOptions={ordersFilterOptions}
        onSearch={handleSearch}
      />
      <AddOrder />
      <ScrollView>{renderOrderCards()}</ScrollView>
    </View>
  );
}
