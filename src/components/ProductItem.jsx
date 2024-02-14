import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <Text style={styles.text}>{product.title}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: product.images[0] }}
      />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary2,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "300",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 9,
  },
});
