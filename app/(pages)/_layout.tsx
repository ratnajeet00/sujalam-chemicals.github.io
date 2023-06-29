import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const user = {
  username: "Gamerthinks",
  name: "Arya",
  lastName: "Stark",
  email: "gamerthinks@gmail.com",
};

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8d8957",
        },
        headerTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Dashboard",
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="dashboard" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="[user]"
        options={{
          href: {
            pathname: `/${user.username}`,
            params: {
              name: user.name,
              lastName: user.lastName,
              email: user.email,
            },
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
