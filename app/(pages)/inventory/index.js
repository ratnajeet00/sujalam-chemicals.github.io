import { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import API_URL from "../../../API/API";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import ChemicalCard from "../../../components/Inventory/ChemicalCard";

const ITEMS_API_ENDPOINT = `${API_URL}itemList`;

export default function Inventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchInventoryData();

    const interval = setInterval(fetchInventoryData, 20000);

    return () => clearInterval(interval);
  }, []);

  const fetchInventoryData = useCallback(() => {
    fetch(ITEMS_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setInventoryData(data);
        setSortedData(data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  }, []);

  const sortData = useCallback(
    (key) => {
      if (selectedFilter === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortOrder("asc");
        setSelectedFilter(key);
      }

      const sorted = [...sortedData].sort(sortBy(key, sortOrder));

      setSortedData(sorted);
    },
    [selectedFilter, sortOrder, sortedData]
  );

  const sortBy = (key, order) => (a, b) => {
    if (a[key] < b[key]) return order === "asc" ? -1 : 1;
    if (a[key] > b[key]) return order === "asc" ? 1 : -1;
    return 0;
  };

  const handleSearch = (text) => {
    setSearchText(text);
  
    if (text.length === 0) {
      setSortedData(inventoryData);
    } else {
      const filteredData = inventoryData.filter((item) =>
        item.item_name.toLowerCase().includes(text.toLowerCase())
      );
      setSortedData(filteredData);
    }
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
        onSearch={handleSearch}
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
