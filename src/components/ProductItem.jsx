import { Image, Pressable, StyleSheet, View } from "react-native";
import Card from "./Card";
import TextTitleCard from "../components/TextTitleCard";
import TextDescriptionCard from "../components/TextDescriptionCard";

const ProductItem = ({ product, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
    >
      <Card>
        <View style={styles.content}>
          <TextTitleCard title={product.title} />
          <TextDescriptionCard description={product.description} />
        </View>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: product.thumbnail }}
        />
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "80%",
  },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: "20%",
    borderRadius: 9,
  },
});
