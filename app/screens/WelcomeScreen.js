import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          source={require("../assets/background.jpg")}
          style={styles.image}
        />
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      </View>
      <View style={styles.placeholder1} />
      <View style={styles.placeholder2} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 8,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: "center",
  },
  placeholder1: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
  },
  placeholder2: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: colors.secondary,
  },
});
