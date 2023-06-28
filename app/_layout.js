import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const user = {
  username: "Gamethinks",
  name: "Arya",
  lastName: "Stark",
  email: "gamerthinks@gmail.com",
};

export default () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8d8957",
        },
        headerTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="dashboard" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(auth)/login"
        options={{ href: null, headerTitle: "Login" }}
      />
      <Tabs.Screen
        name="[username]"
        options={{
          title: "Profile",
          href: {
            pathname: `/${user.username}`,
            params: {
              name: user.name,
              lastName: user.lastName,
              email: user.email,
            },
          },
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};
