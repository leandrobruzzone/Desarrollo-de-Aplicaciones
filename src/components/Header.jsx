import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary1,
  },
  text: {
    color: colors.textPrimary1,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
