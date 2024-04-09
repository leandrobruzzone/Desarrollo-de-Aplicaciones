import { StyleSheet, Text } from "react-native";

const TextIsSuccess = ({ description }) => {
  return <Text style={styles.successMessage}>{description}</Text>;
};

export default TextIsSuccess;

const styles = StyleSheet.create({
  successMessage: {
    position: "absolute",
    top: "3%",
    right: "0%",
    padding: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    textAlign: "center",
    fontSize: 20,
    color: "white",
    backgroundColor: "#00bb2d",
  },
});
