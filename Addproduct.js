import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [casNo, setCasNo] = useState('');
  const [category, setCategory] = useState('');

  const addProductToBackend = (fileChoice) => {
    const srNo = 1; // As an example, assuming only one product is being added each time

    // Create the product object
    const newProduct = {
      srNo,
      name,
      casNo,
      category,
    };

    // Make a POST request to the backend API
    axios
      .post('http://localhost:3000/api/products', newProduct)
      .then((response) => {
        console.log(response.data.message);
        // Perform any additional actions after successful product addition
      })
      .catch((error) => {
        console.error(error);
        // Handle the error appropriately
      });
  };

  return (
    <View>
      <Text>Add Product</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="CAS No" value={casNo} onChangeText={setCasNo} />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add to API" onPress={() => addProductToBackend('API')} />
    </View>
  );
};

export default AddProduct;
