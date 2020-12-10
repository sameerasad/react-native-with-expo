import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container3}>
          <StatusBar style="auto" />

          <View style={styles.container1} />

          <View style={styles.container2} />
        </View>

        <Image source={require("../assets/chair.jpg")} style={styles.image} />
      </View>
    </>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  container1: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    marginLeft: 10,
    top: 20,
  },
  container2: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    marginRight: 10,
    top: 20,
  },
  image: {
    backgroundColor: colors.black,
    flex: 2,
    width: "100%",
    height: "100%",
    bottom: 75,
  },
  container3: {
    flex: 1,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 40,
  },
});
