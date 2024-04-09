import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  usePostOrderMutation,
  useGetOrdersQuery,
} from "../services/shopService";
import { clearCart } from "../features/shop/cartSlice";
import ConfirmButton from "../components/ConfirmButton";
import TextIsSuccess from "../components/TextIsSuccess";
import Loader from "../components/Loader";
import TextEmpty from "../components/TextEmpty";
import TextTitleCard from "../components/TextTitleCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation();
  const { refetch: refetchOrders } = useGetOrdersQuery();
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (result.isLoading) {
      setIsLoading(true);
    } else if (result.isSuccess) {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
      setTimeout(() => {
        dispatch(clearCart());
        setRefresh((prevState) => !prevState);
      }, 0);
    }
  }, [result.isSuccess, result.isLoading]);

  const confirmCart = async () => {
    setIsLoading(true);
    await triggerPost({ total, cartItems, user: "loggedUser" });
    refetchOrders();
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {cartItems.length > 0 ? (
            <>
              <FlatList
                data={cartItems}
                keyExtractor={(cartItem) => cartItem.id}
                renderItem={({ item }) => <CartItem item={item} />}
                style={styles.flatList}
              />
              <View style={styles.totalContainer}>
                <TextTitleCard title={`Total: $${total}`} />
                <ConfirmButton
                  title={"Confirmar compra"}
                  onPress={confirmCart}
                />
              </View>
            </>
          ) : (
            <TextEmpty description={"No hay productos agregados"} />
          )}
        </>
      )}
      {isSuccess && <TextIsSuccess description="Compra realizada con éxito" />}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  flatList: {
    marginBottom: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
