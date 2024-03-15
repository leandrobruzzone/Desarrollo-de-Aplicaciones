import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../pages/Cart";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ header: () => <Header title="Carrito" /> }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
