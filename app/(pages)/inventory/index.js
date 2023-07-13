import { useState } from "react";
import { ScrollView, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import ChemicalCard from "../../../components/Inventory/ChemicalCard";

const inventoryData = [
  {
    name: "Sodium Chloride",
    quantity: 100,
    dateOfManufacture: "2023-01-01",
    dateOfExpiry: "2025-01-01",
    type: "Salt",
  },
  {
    name: "Sulfuric Acid",
    quantity: 50,
    dateOfManufacture: "2023-02-01",
    dateOfExpiry: "2024-02-01",
    type: "Acid",
  },
  {
    name: "Ethanol",
    quantity: 200,
    dateOfManufacture: "2023-03-01",
    dateOfExpiry: "2026-03-01",
    type: "Alcohol",
  },
  {
    name: "Acetone",
    quantity: 150,
    dateOfManufacture: "2023-04-01",
    dateOfExpiry: "2025-04-01",
    type: "Ketone",
  },
  {
    name: "Methanol",
    quantity: 100,
    dateOfManufacture: "2023-05-01",
    dateOfExpiry: "2024-05-01",
    type: "Alcohol",
  },
  {
    name: "Sodium Chloride",
    quantity: 100,
    dateOfManufacture: "2023-01-01",
    dateOfExpiry: "2025-01-01",
    type: "Salt",
  },
];

export default function Inventory() {
  const [sortedData, setSortedData] = useState(inventoryData);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState(null);

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
      onPress: () => sortData("dateOfManufacture"),
    },
    { text: "Date of Expiry", onPress: () => sortData("dateOfExpiry") },
    { text: "Type", onPress: () => sortData("type") },
  ];

  return (
    <View style={{ margin: 15, paddingBottom: 40 }}>
      <FilteredSearch
        placeholder="Chemical"
        filterOptions={inventoryFilterOptions}
      />
      <ScrollView>
        {sortedData.map((item, index) => (
          <ChemicalCard key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
