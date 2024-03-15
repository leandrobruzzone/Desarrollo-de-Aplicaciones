import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View, Pressable } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: "loggedUser" });
  };

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(cartItem) => cartItem.id}
            renderItem={({ item }) => <CartItem item={item} />}
            style={styles.flatList}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${total}</Text>
            <Pressable style={styles.confirmButton} onPress={confirmCart}>
              <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <Text style={styles.emptyText}>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatList: {
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  confirmButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
  },
});
