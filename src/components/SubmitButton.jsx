import { Pressable, StyleSheet, Text } from "react-native";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "80%",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 22,
  },
});
