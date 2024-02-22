import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../assets/data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

const ItemListCategories = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={{ flex: 1 }}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
