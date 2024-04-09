import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextCategoryCard = ({ title }) => {
  const { width } = useWindowDimensions();

  return (
    <Text style={width < 400 ? styles.titleMin : styles.title}>{title}</Text>
  );
};

export default TextCategoryCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
  titleMin: {
    fontSize: 18,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
});
