import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import ChemicalCard from "../../../components/Inventory/ChemicalCard";
export default function Inventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    fetchInventoryData();

    const interval = setInterval(fetchInventoryData, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchInventoryData = () => {
    try {
      fetch("https://dbd4-2405-201-4014-21e-74ac-180d-a3b4-ef2b.ngrok-free.app/itemList")
        .then((response) => response.json())
        .then((data) => {
          setInventoryData(data);
          setSortedData(data);
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
    { text: "Type", onPress: () => sortData("type") },
  ];

  return (
    <View style={{ margin: 15, paddingBottom: 50 }}>
      <FilteredSearch
        placeholder="Chemical"
        filterOptions={inventoryFilterOptions}
      />
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
          sortedData.map((item) => (
            <ChemicalCard
              key={item.id}
              item={item}
              showButtons={activeCard}
              setShowButtons={setActiveCard}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}