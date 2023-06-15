import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, );

  const checkLoggedIn = async () => {
  try {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigation.navigate('Home');
    }
  } catch (error) {
    console.log('Error retrieving login status:', error);
  } finally {
    await AsyncStorage.removeItem('isLoggedIn'); // Remove 'isLoggedIn' to reset the login status
  }
};


  const handleLogin = async () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoading(true);
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate('Home');
        }, 1500);
      } catch (error) {
        console.log('Error saving login status:', error);
        setIsLoading(false);
      }
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
    
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
});

export default LoginPage;
