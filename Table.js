import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import API from "./product-API";
import VETERINARY from "./product-VET";
import SPECIALTY from "./product-SPE";
import QualityPage from "./quality";

const Table1 = () => (
  <ScrollView style={styles.container}>
    <View style={[styles.row, styles.headerRow]}>
      <Text style={styles.cell}>Sr. No.</Text>
      <Text style={styles.cell}>Name</Text>
      <Text style={styles.cell}>CAS No.</Text>
      <Text style={styles.cell}>Category</Text>
    </View>
    {API.map((API) => (
      <View key={API.srNo}>
        <View style={styles.row}>
          <Text style={styles.cell}>{API.srNo}</Text>
          <Text style={styles.cell}>{API.name}</Text>
          <Text style={styles.cell}>{API.casNo}</Text>
          <Text style={styles.cell}>{API.category}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    ))}
  </ScrollView>
);

const Table2 = () => (
  <ScrollView style={styles.container}>
    <View style={[styles.row, styles.headerRow]}>
      <Text style={styles.cell}>Sr. No.</Text>
      <Text style={styles.cell}>Name</Text>
      <Text style={styles.cell}>CAS No.</Text>
      <Text style={styles.cell}>Category</Text>
    </View>
    {VETERINARY.map((VETERINARY) => (
      <View key={VETERINARY.srNo}>
        <View style={styles.row}>
          <Text style={styles.cell}>{VETERINARY.srNo}</Text>
          <Text style={styles.cell}>{VETERINARY.name}</Text>
          <Text style={styles.cell}>{VETERINARY.casNo}</Text>
          <Text style={styles.cell}>{VETERINARY.category}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    ))}
  </ScrollView>
);

const Table3 = () => (
  <ScrollView style={styles.container}>
    <View style={[styles.row, styles.headerRow]}>
      <Text style={styles.cell}>Sr. No.</Text>
      <Text style={styles.cell}>Name</Text>
      <Text style={styles.cell}>CAS No.</Text>
      <Text style={styles.cell}>Category</Text>
    </View>
    {SPECIALTY.map((item) => (
      <View key={item.srNo}>
        <View style={styles.row}>
          <Text style={styles.cell}>{item.srNo}</Text>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.casNo}</Text>
          <Text style={styles.cell}>{item.category}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
    ))}
  </ScrollView>
);

function App() {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleButtonPress1 = () => {
    setSelectedTable("Table1");
  };

  const handleButtonPress2 = () => {
    setSelectedTable("Table2");
  };

  const handleButtonPress3 = () => {
    setSelectedTable("Table3");
  };

  const handleButtonPress4 = () => {
    setSelectedTable("Quality");
  };

  const handleGoBack = () => {
    setSelectedTable(null);
  };

  return (
    <View style={styles.container}>
      {!selectedTable ? (
        <View style={styles.buttonContainer}>
          <Button onPress={handleButtonPress1} title="API" />
          <View style={styles.margin} />
          <Button onPress={handleButtonPress2} title="VETERINARY(API)" />
          <View style={styles.margin} />
          <Button onPress={handleButtonPress3} title="SPECIALTY CHEMICALS" />
          <View style={styles.margin} />
          <Button onPress={handleButtonPress4} title="Quality" />
        </View>
      ) : selectedTable === "Quality" ? (
        <View style={styles.tableContainer}>
          <Button onPress={handleGoBack} title="Go Back" />
          <QualityPage />
        </View>
      ) : (
        <View style={styles.tableContainer}>
          <Button onPress={handleGoBack} title="Go Back" />
          {selectedTable === "Table1" ? (
            <Table1 />
          ) : selectedTable === "Table2" ? (
            <Table2 />
          ) : (
            <Table3 />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerRow: {
    backgroundColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
  horizontalLine: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  margin: {
    marginVertical: 10,
  },
  tableContainer: {
    flex: 1,
  },
});

export default App;
