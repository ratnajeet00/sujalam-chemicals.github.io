import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import ChemicalCard from "../../../components/Inventory/ChemicalCard";

export default function Inventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    fetchInventoryData();

    // Fetch inventory data every 5 seconds
    const interval = setInterval(fetchInventoryData, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchInventoryData = () => {
    try {
      fetch("https://eminent-quickest-menu.glitch.me/inventoryList")
        .then((response) => response.json())
        .then((data) => {
          setInventoryData(data);
          setSortedData(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching inventory data:", error);
        });
    } catch (error) {
      console.error("Error fetching inventory data:", error);
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

  const inventoryFilterOptions = [
    { text: "Quantity", onPress: () => sortData("quantity") },
    {
      text: "Date of Manufacture",
      onPress: () => sortData("date_of_manufacture"),
    },
    { text: "Date of Expiry", onPress: () => sortData("date_of_expiry") },
    { text: "Type", onPress: () => sortData("type") },
  ];

  return (
    <View style={{ margin: 15, paddingBottom: 40 }}>
      <FilteredSearch
        placeholder="Chemical"
        filterOptions={inventoryFilterOptions}
      />
      <ScrollView>
        {sortedData.length === 0 ? (
          <Text>No inventory data available</Text>
        ) : (
          sortedData.map((item, index) => (
            <ChemicalCard key={index} item={item} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
