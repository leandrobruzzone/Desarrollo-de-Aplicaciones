import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 16,
    fontStyle: "italic",
  },
  price: {
    fontSize: 16,
    color: "#007bff",
  },
});
