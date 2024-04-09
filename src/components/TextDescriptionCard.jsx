import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextDescriptionCard = ({ description }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Text
      style={width < 400 ? styles.descriptionTextMin : styles.descriptionText}
    >
      {description}
    </Text>
  );
};

export default TextDescriptionCard;

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 15,
    fontFamily: "RobotoItalic",
    color: colors.textPrimary1,
  },
  descriptionTextMin: {
    fontSize: 14,
    fontFamily: "RobotoItalic",
    color: colors.textPrimary1,
  },
});
