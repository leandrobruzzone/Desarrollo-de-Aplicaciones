import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextDescriptionOrder = ({ description }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Text
      style={width < 400 ? styles.descriptionTextMin : styles.descriptionText}
    >
      {description}
    </Text>
  );
};

export default TextDescriptionOrder;

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 18,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
    paddingVertical: 6,
  },
  descriptionTextMin: {
    fontSize: 16,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
    paddingVertical: 6,
  },
});
