import { Pressable, StyleSheet, Text } from "react-native";

const NavigationBtn = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default NavigationBtn;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffe600",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "80%",
    marginTop: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});
