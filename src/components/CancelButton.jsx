import { Pressable, StyleSheet, Text } from "react-native";

const ConfirmButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fe0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
