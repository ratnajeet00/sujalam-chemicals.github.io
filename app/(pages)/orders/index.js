import { useState } from "react";
import { ScrollView, View } from "react-native";
import FilteredSearch from "../../../components/FilteredSearch/FilteredSearch";
import OrderCard from "../../../components/Orders/OrdersCard";

const ordersData = [
  {
    chemicalName: "Sodium Chloride",
    qty: 100,
    dateOfOrdering: "2023-01-01",
    dateOfDelivery: null,
    clientName: "Client A",
  },
  {
    chemicalName: "Sulfuric Acid",
    qty: 50,
    dateOfOrdering: "2023-02-01",
    dateOfDelivery: null,
    clientName: "Client B",
  },
  {
    chemicalName: "Ethanol",
    qty: 200,
    dateOfOrdering: "2023-03-01",
    dateOfDelivery: null,
    clientName: "Client C",
  },
  {
    chemicalName: "Acetone",
    qty: 150,
    dateOfOrdering: "2023-04-01",
    dateOfDelivery: null,
    clientName: "Client D",
  },
  {
    chemicalName: "Methanol",
    qty: 100,
    dateOfOrdering: "2023-05-01",
    dateOfDelivery: null,
    clientName: "Client E",
  },
  {
    chemicalName: "Sodium Chloride",
    qty: 100,
    dateOfOrdering: "2023-01-01",
    dateOfDelivery: null,
    clientName: "Client A",
  },
];

export default function Orders() {
  const [sortedData, setSortedData] = useState(ordersData);
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

  const ordersFilterOptions = [
    { text: "Chemical Name", onPress: () => sortData("chemicalName") },
    { text: "Qty", onPress: () => sortData("qty") },
    { text: "Date of Ordering", onPress: () => sortData("dateOfOrdering") },
    { text: "Date of Delivery", onPress: () => sortData("dateOfDelivery") },
    { text: "Client Name", onPress: () => sortData("clientName") },
  ];

  return (
    <View style={{ margin: 15, paddingBottom: 40 }}>
      <FilteredSearch placeholder="Order" filterOptions={ordersFilterOptions} />
      <ScrollView>
        {sortedData.map((item, index) => (
          <OrderCard key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
