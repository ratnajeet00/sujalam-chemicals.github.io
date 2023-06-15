// HomeScreen.js

import React from 'react';
import { Button, View } from 'react-native';


const HomeScreen = ({ navigation }) => {
  const goToTable = () => {
    navigation.navigate('Table');
  } 
    const gotoadd =() =>{
      navigation.navigate('Add')
    }
  


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="View Products" onPress={goToTable} />
      <Button title="Add Products" onPress={gotoadd} />
    </View>
  );
};

export default HomeScreen;
