import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    checkLoginStatus();
  }, );

  const checkLoginStatus = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      const storedRememberMe = await AsyncStorage.getItem('rememberMe');

      if (storedRememberMe === 'true' && storedUsername && storedPassword) {
        // Set the stored username and password in the state
        setUsername(storedUsername);
        setPassword(storedPassword);

        // Perform automatic login
        handleLogin();
      }
    } catch (error) {
      console.log('Error retrieving login status:', error);
    }
  };

 const handleLogin = async () => {
  try {
    const response = await fetch('https://probable-jasper-minnow.glitch.me/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      // Check the response from the server and perform the desired action (e.g., navigate to home screen)
      if (data.message === 'Login successful') {
        if (rememberMe) {
          // Store the username, password, and rememberMe flag in AsyncStorage
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('password', password);
          await AsyncStorage.setItem('rememberMe', 'true');
        } else {
          // Clear the stored username, password, and rememberMe flag from AsyncStorage
          await AsyncStorage.removeItem('username');
          await AsyncStorage.removeItem('password');
          await AsyncStorage.removeItem('rememberMe');
        }
        navigation.navigate('Home');
      } else {
        throw new Error('Incorrect username or password');
      }
    } 
    
  } catch (error) {
    setLoginError(error.message);
  }
};


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };
  


  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://img.freepik.com/free-vector/login-page-template-line-style_1017-31857.jpg?w=740&t=st=1687012478~exp=1687013078~hmac=2b8043ae062c4a34cb0dc66f6581c2f6bc608a0b7a4c1a56f1e2ff91a19892af',
      }}
      blurRadius={50}
    >
      <View style={styles.overlay}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.rectangle}>
          <View style={styles.row}>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#000000"
              style={[styles.input, styles.placeholderText]}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.passwordInputContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                placeholder="Password"
                placeholderTextColor="#000000"
                style={[styles.input, styles.placeholderText]}
              />
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <View style={styles.passwordVisibilityIcon}>
                  <Image
                    source={require('./eye-password.png')}
                    style={styles.passwordVisibilityIconImage}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handleRememberMeToggle}>
              <View style={[styles.checkbox, rememberMe ? styles.checkboxChecked : null]} />
              <Text style={styles.checkboxText}>Remember me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'null',
    borderColor: 'white',
  },
  rectangle: {
    width: '80%',
    borderRadius: 20,
    padding: 20,
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    marginBottom: 20,
  },
  placeholderText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordVisibilityIcon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -30,
  },
  passwordVisibilityIconImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: null,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#000000',
  },
  checkboxText: {
    color: '#000000',
  },
});

export default LoginPage;