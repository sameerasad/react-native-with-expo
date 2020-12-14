import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";
import colors from "./app/config/colors.js";
import { TestText } from "./app/TestText.js";

export default function App() {
  return <TestText />;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    paddingVertical: "100%",

    borderRadius: 0,
    borderWidth: 0,
    elevation: 60,

    flexDirection: "column",
  },
});
