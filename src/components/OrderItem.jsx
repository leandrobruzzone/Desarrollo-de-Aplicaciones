import { StyleSheet } from "react-native";
import Card from "./Card";
import TextDescriptionOrder from "../components/TextDescriptionOrder";

const OrderItem = ({ item }) => {
  let createdAtDate;
  if (item.createdAt instanceof Date) {
    createdAtDate = item.createdAt;
  } else if (typeof item.createdAt === "string") {
    createdAtDate = new Date(item.createdAt);
  }

  const formattedDate =
    createdAtDate && !isNaN(createdAtDate.getTime())
      ? createdAtDate.toLocaleString()
      : "Fecha inválida";

  const total = item.total || 0;

  return (
    <Card style={styles.card}>
      <TextDescriptionOrder description={formattedDate} />
      <TextDescriptionOrder description={`Total: $${total}`} />
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-between",
  },
});
