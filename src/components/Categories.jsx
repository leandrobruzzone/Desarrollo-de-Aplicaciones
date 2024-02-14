import { FlatList, StyleSheet } from "react-native";
import React from "react";
import categories from "../assets/data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ setCategorySelected }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category}
      renderItem={({ item }) => (
        <CategoryItem
          setCategorySelected={setCategorySelected}
          category={item}
        />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
