import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground, _View, Text } from "react-native";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={styles.image}
        >
          <ImageBackground
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          ></ImageBackground>
          <Text style={styles.text}>Sell what you don't need!</Text>
        </ImageBackground>
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
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    bottom: 160,
  },
  placeholder1: {
    flex: 1,
    width: "100%",
    height: 40,
    backgroundColor: colors.primary,
  },
  placeholder2: {
    flex: 1,
    width: "100%",
    height: 40,
    backgroundColor: colors.secondary,
  },
  text: {
    bottom: 163,
  },
});
