import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddUserPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAddUser = () => {
    // Check if both username and password are provided
    if (username.trim() === '' || password.trim() === '') {
      setMessage('Please enter both username and password.');
    } else {
      // Logic to save the user details to your data source
      // For simplicity, let's assume we are storing them in an array
      const newUser = {
        username: username.trim(),
        password: password.trim(),
      };
      // Add the new user to your data source (e.g., an array or database)
      // users.push(newUser); // Uncomment this line if you're using an array

      // Display success message
      setMessage('User created successfully.');

      // Reset the input fields
      setUsername('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Button title="Add User" onPress={handleAddUser} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default AddUserPage;
