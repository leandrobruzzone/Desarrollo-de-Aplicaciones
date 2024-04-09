import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { colors } from "../global/colors";

const TextDescription = ({ description }) => {
  const { width, height } = useWindowDimensions();

  return (
    <Text
      style={width < 400 ? styles.descriptionTextMin : styles.descriptionText}
    >
      {description}
    </Text>
  );
};

export default TextDescription;

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: 18,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
  descriptionTextMin: {
    fontSize: 15,
    fontFamily: "RobotoRegular",
    color: colors.textPrimary1,
  },
});
