import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const ProductItem = ({ product, navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Detalle de Producto", { id: product.id })
      }
    >
      <Card>
        <View style={styles.content}>
          <Text style={width < 400 ? styles.titleMin : styles.title}>
            {product.title}
          </Text>
          <Text style={width < 400 ? styles.textMin : styles.text}>
            {product.description}
          </Text>
        </View>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{ uri: product.images[0] }}
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
  titleMin: {
    color: colors.textPrimary2,
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "RobotoRegular",
  },
  title: {
    color: colors.textPrimary2,
    fontSize: 21,
    fontWeight: "400",
    fontFamily: "RobotoRegular",
  },
  textMin: {
    color: colors.textPrimary2,
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "RobotoRegular",
  },
  text: {
    color: colors.textPrimary2,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "RobotoRegular",
  },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: "20%",
    borderRadius: 9,
  },
});
