import { FlatList, StyleSheet } from "react-native";
import React from "react";
import categories from "../assets/data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={(category) => category}
      renderItem={({ item }) => (
        <CategoryItem navigation={navigation} category={item} />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
