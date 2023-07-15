import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import AddOrder from "../../../components/Orders/AddOrder";
import OrderCard from "../../../components/Orders/OrdersCard";

export default function Orders() {
  const [activeCard, setActiveCard] = useState(null);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    fetchOrdersData();
    const interval = setInterval(fetchOrdersData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchOrdersData = () => {
    try {
      fetch("https://eminent-quickest-menu.glitch.me/orderList")
        .then((response) => response.json())
        .then((data) => {
          setSortedData(data);
        })
        .catch((error) => {
          console.error("Error fetching orders data:", error);
        });
    } catch (error) {
      console.error("Error fetching orders data:", error);
    }
  };

  const sortData = (key) => {
    if (selectedFilter === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
      setSelectedFilter(key);
    }

    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
  };

  const ordersFilterOptions = [
    { text: "Chemical Name", onPress: () => sortData("chemicalName") },
    { text: "Qty", onPress: () => sortData("qty") },
    { text: "Date of Ordering", onPress: () => sortData("dateOfOrdering") },
    { text: "Date of Delivery", onPress: () => sortData("dateOfDelivery") },
    { text: "Client Name", onPress: () => sortData("clientName") },
  ];

  return (
    <View style={{ margin: 15, paddingBottom: 40 }}>
      <FilteredSearch placeholder="Order" filterOptions={ordersFilterOptions} />
      <AddOrder />
      <ScrollView>
        {sortedData.length === 0 ? (
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
        ) : (
          sortedData.map((item, index) => (
            <OrderCard
              key={index}
              item={item}
              showButtons={activeCard === item.id}
              setShowButtons={setActiveCard}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}
