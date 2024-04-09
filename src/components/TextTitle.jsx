import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextTitle = ({ title }) => {
  const { width } = useWindowDimensions();

  return (
    <Text style={width < 400 ? styles.titleMin : styles.title}>{title}</Text>
  );
};

export default TextTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "RobotoBold",
    color: colors.textPrimary1,
    marginVertical: 20,
  },
  titleMin: {
    fontSize: 21,
    fontFamily: "RobotoBold",
    color: colors.textPrimary1,
    marginVertical: 20,
  },
});
