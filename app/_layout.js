import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8d8957",
        },
        headerTintColor: "#fff",
      }}
    />
  );
}