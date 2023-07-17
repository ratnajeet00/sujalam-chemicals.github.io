import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import COLORS from "../../constants/colors";

const FilteredSearch = ({ placeholder, filterOptions, onSearch }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchField}
          placeholder={placeholder}
          onChangeText={handleSearchTextChange}
          value={searchText}
        />
        <Pressable style={styles.filterButton} onPress={toggleShowOptions}>
          <FontAwesome5 name="filter" size={40} color={COLORS.primary} />
        </Pressable>
      </View>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {filterOptions.map((option, index) => (
            <Pressable
              key={index}
              style={styles.optionButton}
              onPress={() => {
                option.onPress();
              }}
            >
              <Text style={styles.optionButtonText}>{option.text}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
  },
  searchField: {
    width: "85%",
    maxWidth: 400,
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.accent,
    padding: 10,
  },
  filterButton: {
    width: "15%",
    maxWidth: 60,
  },
  optionsContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    columnGap: 10,
    rowGap: 10,
  },
  optionButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.accent,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  optionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FilteredSearch;
