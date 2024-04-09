import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";
import Counter from "../components/Counter";
import { reset } from "../features/counter/counterSlice";
import ConfirmButton from "../components/ConfirmButton";
import TextIsSuccess from "../components/TextIsSuccess";
import Loader from "../components/Loader";
import TextTitle from "../components/TextTitle";
import TextDescription from "../components/TextDescription";
import TextEmpty from "../components/TextEmpty";
import { useGetProductByIdQuery } from "../services/shopService";

const ItemDetail = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = route.params;
  const dispatch = useDispatch();

  const { data: product, isLoading: loadingProduct } =
    useGetProductByIdQuery(id);

  useEffect(() => {
    setIsLoading(loadingProduct);
  }, [loadingProduct]);

  const onAddCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addItem({ ...product, quantity: quantity }));
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      {product ? (
        <View style={styles.container}>
          <TextTitle title={product.title} />
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={{ uri: product.images[0] }}
          />
          <View style={styles.textContainer}>
            <TextDescription description={product.description} />
            <TextTitle title={`$${product.price}`} />
            <Counter quantity={quantity} setQuantity={setQuantity} />
            <ConfirmButton title={"Añadir al Carrito"} onPress={onAddCart} />
          </View>
          {isLoading && <Loader />}
          {isSuccess && (
            <TextIsSuccess description="Producto añadido con éxito" />
          )}
        </View>
      ) : (
        <View>
          <TextEmpty description={"Cargando..."} />
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
    paddingVertical: 15,
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
});
