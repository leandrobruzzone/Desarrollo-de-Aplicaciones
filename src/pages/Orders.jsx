import { FlatList, StyleSheet, View } from "react-native";
import orders from "../assets/data/orders.json";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(order) => order.id}
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
