import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../assets/data/products.json";
import { colors } from "../global/colors";

const ItemDetail = ({ route }) => {
  const { width, height } = useWindowDimensions();
  const [product, setProduct] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={{ flex: 1 }}>
      {product ? (
        <View style={styles.container}>
          <Image
            style={width < 400 ? styles.imageMin : styles.image}
            resizeMode="stretch"
            source={{ uri: product.images[0] }}
          />
          <View style={styles.textContainer}>
            <Text
              style={
                width < 400 ? styles.descriptionTextMin : styles.descriptionText
              }
            >
              {product.title}
            </Text>
            <Text
              style={
                width < 400 ? styles.descriptionTextMin : styles.descriptionText
              }
            >
              {product.description}
            </Text>
            <Text style={width < 400 ? styles.textPriceMin : styles.textPrice}>
              ${product.price}
            </Text>
            <Pressable style={styles.buy}>
              <Text style={width < 400 ? styles.buyTextMin : styles.buyText}>
                Comprar
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  imageMin: {
    width: "75%",
    height: "35%",
    marginVertical: 15,
    borderRadius: 10,
  },
  image: {
    width: "80%",
    height: "40%",
    marginVertical: 15,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  descriptionTextMin: {
    fontSize: 13,
    paddingVertical: 3,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
  descriptionText: {
    fontSize: 16,
    paddingVertical: 3,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
  textPriceMin: {
    fontSize: 21,
    paddingVertical: 5,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
  textPrice: {
    fontSize: 25,
    paddingVertical: 5,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "green",
  },
  buyTextMin: {
    fontSize: 19,
    color: "white",
    fontFamily: "RobotoRegular",
  },
  buyText: {
    fontSize: 22,
    color: "white",
    fontFamily: "RobotoRegular",
  },
});
