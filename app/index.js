import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { AuthStore } from "../store";

export default function Index() {
  const segments = useSegments();
  const router = useRouter();
  const { isLoggedIn } = AuthStore.useState((s) => s);
  const navigationState = useRootNavigationState();

  React.useEffect(() => {
    if (!navigationState?.key) return;
    console.log(navigationState.key);

    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not in the auth group.
      !isLoggedIn &&
      !inAuthGroup
    ) {
      router.replace("/login");
    } else if (isLoggedIn) {
      router.replace("(pages)/home");
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  if (!navigationState?.key)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
}
