import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, ViewBase } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";

export default function App() {
  return <View style={styles.container} />;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    top: "40%",
    borderRadius: 35,
    borderWidth: 10,
    elevation: 50,

    flexDirection: "column",
  },
});
