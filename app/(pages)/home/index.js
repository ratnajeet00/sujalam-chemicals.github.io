import React, { useEffect, useState } from "react";
import { View } from "react-native";
import QuickViewPanel from "../../../components/Dashboard/QuickViewPanel";

export default function Home() {
  const [inventoryData, setInventoryData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    fetchInventoryData();
    fetchOrdersData();
  }, []);

  const fetchInventoryData = () => {
    fetch("http://localhost:3000/inventoryList") // Update with your server URL
      .then((response) => response.json())
      .then((data) => {
        setInventoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  };

  const fetchOrdersData = () => {
    fetch("http://localhost:3000/viewOrders") // Update with your server URL
      .then((response) => response.json())
      .then((data) => {
        setOrdersData(data);
      })
      .catch((error) => {
        console.error("Error fetching orders data:", error);
      });
  };

  return (
    <View style={{ margin: 15 }}>
      <QuickViewPanel header="Inventory" data={inventoryData} />
      <QuickViewPanel header="Orders" data={ordersData} />
    </View>
  );
}
