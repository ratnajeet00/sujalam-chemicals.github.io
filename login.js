import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Home');
    } else {
      console.log("error")
    }
  };


  return (
    <View style={styles.container}>
      
      <View style={styles.textcontainer} >
      <Text>Login</Text>
      <View style={styles.margin} />
      <View style={styles.margin} />
        <Text>Username:</Text>
        <TextInput value={username} onChangeText={setUsername} />
    </View>  
    <View style={styles.margin} />
    <View style={styles.margin} />
      <View style={styles.textcontainer} >
        <Text>Password:</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <View style={styles.margin} />
        
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 10,
  },
  textcontainer: {
   paddingLeft:100
  },
 buttonContainer: {
    flex: 1,
    
    padding: 10,
  },
  margin: {
    marginVertical: 10,
  },
});

export default LoginPage;