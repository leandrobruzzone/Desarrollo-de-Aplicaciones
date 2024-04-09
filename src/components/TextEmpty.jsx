import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextEmpty = ({ description }) => {
  const { width } = useWindowDimensions();

  return (
    <Text style={width < 400 ? styles.emptyTextMin : styles.emptyText}>
      {description}
    </Text>
  );
};

export default TextEmpty;

const styles = StyleSheet.create({
  emptyText: {
    fontSize: 30,
    margin: "auto",
    marginVertical: 30,
    textAlign: "center",
    color: colors.textPrimary1,
    fontFamily: "RobotoItalic",
  },
  emptyTextMin: {
    fontSize: 24,
    margin: "auto",
    marginVertical: 30,
    textAlign: "center",
    color: colors.textPrimary1,
    fontFamily: "RobotoItalic",
  },
});
