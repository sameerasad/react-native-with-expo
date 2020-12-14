import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
export default AppText;
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    textDecorationLine: "underline",
    textTransform: "capitalize",
    color: colors.primary,

    lineHeight: 40, //DISTANCE BETWEEN LINES
    textAlign: "center",
  },
});
