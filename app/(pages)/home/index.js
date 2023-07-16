import React, { useEffect, useState } from "react";
import { View } from "react-native";
import QuickViewPanel from "../../../components/Dashboard/QuickViewPanel";

export default function Home() {
  const [inventoryData, setInventoryData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  const fetchInventoryData = () => {
    fetch("https://dec8-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/itemlist")
      .then((response) => response.json())
      .then((data) => {
        console.log("Inventory data:", data);
        setInventoryData(data); // Update the inventory data state
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  };

  const fetchOrdersData = () => {
    fetch("https://dec8-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/orderlist")
      .then((response) => response.json())
      .then((data) => {
        console.log("Orders data:", data);
        setOrdersData(data); // Update the orders data state
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
    }, 5000); // Fetch data every 5 seconds (adjust the interval as needed)

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
