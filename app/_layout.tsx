import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(pages)" options={{
        headerShown: false
      }}/>
    </Stack>
  );
}