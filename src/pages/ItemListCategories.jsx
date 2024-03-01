import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector(
    (state) => state.shopReducer.value.productsFilteredByCategory
  );

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product) =>
      product.title.includes(keyword)
    );
    setProducts(productsFiltered);
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
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
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
});
