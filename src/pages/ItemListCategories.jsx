import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

const ItemListCategories = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const category = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  const { data: productsFilteredByCategory } =
    useGetProductsByCategoryQuery(category);

  useEffect(() => {
    if (productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory);
      const productsFiltered = productsRaw.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
