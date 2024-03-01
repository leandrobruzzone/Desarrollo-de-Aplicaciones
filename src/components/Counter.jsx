import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text>{count}</Text>
        <Pressable onPress={() => dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  span: {
    width: "30%",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
  spanInput: {
    width: "30%",
    padding: 10,
    textAlign: "center",
    fontSize: 15,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
  },
});
