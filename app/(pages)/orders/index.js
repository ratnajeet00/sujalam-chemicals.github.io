import { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import OrderCard from "../../../components/Orders/OrdersCard";

export default function Orders() {
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    fetchOrdersData();

    // Fetch orders data every 5 seconds
    const interval = setInterval(fetchOrdersData, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchOrdersData = () => {
    try {
      fetch("https://eminent-quickest-menu.glitch.me/viewOrders")
        .then((response) => response.json())
        .then((data) => {
          setSortedData(data);
          console.log(data);
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
      <FilteredSearch
        placeholder="Order"
        filterOptions={ordersFilterOptions}
      />
      <ScrollView>
        {sortedData.map((item, index) => (
          <OrderCard key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
