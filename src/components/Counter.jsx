import { Pressable, StyleSheet, Text, View } from "react-native";

const Counter = ({ quantity, setQuantity }) => {
  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };

  const decrementCounter = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={decrementCounter} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>Cantidad: {quantity}</Text>
        <Pressable onPress={incrementCounter} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: "gray",
    borderRadius: 12,
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  quantity: {
    fontSize: 24,
    marginHorizontal: 6,
  },
});
