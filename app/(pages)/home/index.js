import React, { useEffect, useState } from "react";
import { View } from "react-native";
import QuickViewPanel from "../../../components/Dashboard/QuickViewPanel";

export default function Home() {
  const [inventoryData, setInventoryData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  const fetchInventoryData = () => {
    fetch("https://eminent-quickest-menu.glitch.me/itemList")
      .then((response) => response.json())
      .then((data) => {
        setInventoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  };

  const fetchOrdersData = () => {
    fetch("https://eminent-quickest-menu.glitch.me/orderList")
      .then((response) => response.json())
      .then((data) => {
        setOrdersData(data);
      })
      .catch((error) => {
        console.error("Error fetching orders data:", error);
      });
  };

  useEffect(() => {
    fetchInventoryData();
    fetchOrdersData();

    const interval = setInterval(() => {
      fetchInventoryData();
      fetchOrdersData();
    }, 50); // Fetch data every 5 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, []);

  return (
    <View style={{ margin: 15 }}>
      <QuickViewPanel header="Inventory" data={inventoryData} />
      <QuickViewPanel header="Orders" data={ordersData} />
    </View>
  );
}
