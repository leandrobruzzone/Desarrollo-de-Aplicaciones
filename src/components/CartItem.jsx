import { StyleSheet, View, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/shop/cartSlice";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";
import TextTitleCard from "../components/TextTitleCard";
import TextDescriptionCard from "../components/TextDescriptionCard";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <TextTitleCard title={`Producto: ${item.title}`} />
        <TextDescriptionCard description={`Marca: ${item.brand}`} />
        <TextDescriptionCard description={`Precio: $${item.price}`} />
        <TextDescriptionCard description={`Cantidad: ${item.quantity}`} />
      </View>
      <View style={styles.RemoveItem}>
        <Pressable onPress={handleRemoveItem}>
          <Ionicons name="trash-outline" size={36} color="black" />
        </Pressable>
      </View>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    width: "90%",
  },
  RemoveItem: {
    width: "10%",
  },
});
