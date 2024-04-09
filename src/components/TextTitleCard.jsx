import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextTitleCard = ({ title }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Text style={width < 400 ? styles.titleMin : styles.title}>{title}</Text>
  );
};

export default TextTitleCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontFamily: "RobotoBoldItalic",
    color: colors.textPrimary1,
  },
  titleMin: {
    fontSize: 18,
    fontFamily: "RobotoBoldItalic",
    color: colors.textPrimary1,
  },
});
