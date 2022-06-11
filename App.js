import React from "react";
import Tabs from "./navigation/Tabs";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import Stack from "./navigation/Stack";


function App() {
  const isDark = useColorScheme() === "dark";
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack />
    </NavigationContainer>
  );
}

export default App;