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
      <View style={styles.placeholder1}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.placeholder2}>
        <Text style={styles.loginText}>Register</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 10,
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
  },
  logo: {
    width: 100,
    height: 100,
    bottom: 160,
  },
  placeholder1: {
    flex: 1,
    width: "100%",
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 35,
    top: 5,
    opacity: 0.6,
  },
  placeholder2: {
    width: "100%",
    flex: 1,
    height: 30,
    backgroundColor: colors.secondary,
    borderRadius: 35,
    marginTop: 10,
    opacity: 0.6,
  },
  text: {
    bottom: 163,
  },
  loginText: {
    top: 20,
    left: "45%",
  },
});
