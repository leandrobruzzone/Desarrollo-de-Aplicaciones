import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("ItemListCategories", { category });
      }}
    >
      <Card>
        <Text style={width < 400 ? styles.textMin : styles.text}>
          {category}
        </Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary2,
    fontFamily: "RobotoRegular",
    fontSize: 21,
    fontWeight: "400",
  },
  textMin: {
    color: colors.textPrimary2,
    fontFamily: "RobotoRegular",
    fontSize: 18,
    fontWeight: "400",
  },
});
