import React, { useEffect, useState } from "react";
import { View } from "react-native";
import API_URL from "../../../API/API";
import QuickViewPanel from "../../../components/Dashboard/QuickViewPanel";

const ITEMS_API_ENDPOINT = `${API_URL}itemList`;
const ORDERS_API_ENDPOINT = `${API_URL}orderList`;

export default function Home() {
  const [inventoryData, setInventoryData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data fetched!");
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchInventoryData = () => {
    fetchData(ITEMS_API_ENDPOINT, setInventoryData);
  };

  const fetchOrdersData = () => {
    fetchData(ORDERS_API_ENDPOINT, setOrdersData);
  };

  useEffect(() => {
    fetchInventoryData();
    fetchOrdersData();

    const interval = setInterval(() => {
      fetchInventoryData();
      fetchOrdersData();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{ margin: 15 }}>
      <QuickViewPanel header="Inventory" data={inventoryData} />
      <QuickViewPanel header="Orders" data={ordersData} />
    </View>
  );
}
