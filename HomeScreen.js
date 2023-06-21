import React from 'react';
import { Button, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  const handleManageProduct = () => {
    navigation.navigate('Manage');
  };

  const handleAddUser = () => {
    navigation.navigate('ADD');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 10 }}>
        <Button title="Manage Product" onPress={handleManageProduct} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Add User" onPress={handleAddUser} />
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
