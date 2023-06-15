import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./HomeScreen";
import Table from "./Table";
import AddProduct from './Addproduct';
import LoginPage from './login';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginPage },
    Home: { screen: HomeScreen },
    Table: { screen: Table },
    Add : {screen: AddProduct}
  },
  {
    initialRouteName: "Login",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
