import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <Card>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary2,
    fontFamily: "RobotoRegular",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
  },
});
