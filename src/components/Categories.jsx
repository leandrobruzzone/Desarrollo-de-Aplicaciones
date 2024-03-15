import { FlatList, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";

const Categories = ({ navigation }) => {
  const { data, isLoading, error } = useGetCategoriesQuery();

  return (
    <View style={styles.container}>
      <Counter />
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(category) => category}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  list: {
    paddingVertical: 10,
  },
});
