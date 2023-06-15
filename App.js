import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./HomeScreen";
import AddUserPage from "./AddUserPage";
import Manage from "./manage";
import LoginPage from "./login";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginPage },
    Home: { screen: HomeScreen },
    ADD: { screen: AddUserPage },
    Manage: { screen: Manage },
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
