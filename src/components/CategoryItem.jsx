import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";
import TextCategoryCard from "../components/TextCategoryCard";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("ItemListCategories", { category });
      }}
    >
      <Card>
        <TextCategoryCard title={category} />
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create();
