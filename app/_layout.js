import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const username = "Gamethinks";
const name = "Arya";

export default function AppLayout() {
  return (
    <Tabs
      initialRouteName="home"
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
      <Tabs.Screen name="(auth)/login" options={{ href: null, headerTitle: "Login" }} />
      <Tabs.Screen
        name="[username]"
        options={{
          title: "Profile",
          href: {
            pathname: `/${username}`,
            params: {
              name: name,
            },
          },
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
