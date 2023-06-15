import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';

const Manage = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [editItemId, setEditItemId] = useState('');
  const [editItemName, setEditItemName] = useState('');

  const addItem = () => {
    if (itemName.trim() === '') {
      Alert.alert('Error', 'Item name cannot be empty.');
      return;
    }

    const newItem = {
      id: Math.random().toString(),
      name: itemName.trim()
    };

    setInventory(prevInventory => [...prevInventory, newItem]);
    setItemName('');
  };

  const deleteItem = itemId => {
    setInventory(prevInventory =>
      prevInventory.filter(item => item.id !== itemId)
    );
  };

  const editItem = item => {
    setEditItemId(item.id);
    setEditItemName(item.name);
  };

  const updateItem = () => {
    if (editItemName.trim() === '') {
      Alert.alert('Error', 'Item name cannot be empty.');
      return;
    }

    setInventory(prevInventory => {
      const updatedInventory = prevInventory.map(item => {
        if (item.id === editItemId) {
          return { ...item, name: editItemName.trim() };
        }
        return item;
      });
      return updatedInventory;
    });

    setEditItemId('');
    setEditItemName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Item name"
        onChangeText={text => setItemName(text)}
        value={itemName}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        style={styles.list}
        data={inventory}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            {editItemId === item.id ? (
              <>
                <TextInput
                  style={styles.editInput}
                  onChangeText={text => setEditItemName(text)}
                  value={editItemName}
                />
                <Button title="Update" onPress={updateItem} />
              </>
            ) : (
              <>
                <Text style={styles.listItemText}>{item.name}</Text>
                <Button title="Edit" onPress={() => editItem(item)} />
                <Button title="Delete" onPress={() => deleteItem(item.id)} />
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  editInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
  },
});

export default Manage;
