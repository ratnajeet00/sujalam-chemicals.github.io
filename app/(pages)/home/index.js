import React, { useEffect, useState } from "react";
import { View } from "react-native";
import QuickViewPanel from "../../../components/Dashboard/QuickViewPanel";

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
      console.log("Data:", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here, e.g. display an error message or retry the request
    }
  };

  const fetchInventoryData = () => {
    fetchData(
      "https://dbd4-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/itemlist",
      setInventoryData
    );
  };

  const fetchOrdersData = () => {
    fetchData(
      "https://dbd4-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/orderlist",
      setOrdersData
    );
  };

  useEffect(() => {
    fetchInventoryData();
    fetchOrdersData();

    const interval = setInterval(() => {
      fetchInventoryData();
      fetchOrdersData();
    }, 10000); // Fetch data every 10 seconds (adjust the interval as needed)

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
