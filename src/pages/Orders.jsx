import { FlatList, StyleSheet, View } from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersQuery } from "../services/shopService";
import Loader from "../components/Loader";
import TextEmpty from "../components/TextEmpty";

const Orders = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();
  if (isLoading) {
    return <Loader />;
  }
  const ordersObject = orders || {};
  const ordersList = Object.keys(ordersObject).map((key) => ({
    id: key,
    ...ordersObject[key],
  }));

  return (
    <View style={styles.container}>
      {ordersList.length === 0 ? (
        <TextEmpty description={"No hay órdenes realizadas"} />
      ) : (
        <FlatList
          data={ordersList}
          renderItem={({ item }) => <OrderItem item={item} />}
          keyExtractor={(order) => order.id}
          style={styles.flatlist}
        />
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  flatlist: {
    flex: 1,
  },
});
