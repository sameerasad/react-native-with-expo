import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./screens/AppText";
import colors from "./config/colors";

export const TestText = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        hello i really love react-native and react also
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: "Roboto",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    color: colors.primary,
    lineHeight: 40, //DISTANCE BETWEEN LINES
    textAlign: "center",
    fontSize: 40,
    fontWeight: "600",
  },
});
