import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {new Date(item.createdAt).toLocaleString()}
      </Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  total: {
    fontSize: 14,
    marginTop: 5,
  },
});
