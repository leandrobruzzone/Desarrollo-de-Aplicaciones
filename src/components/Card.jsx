import { StyleSheet, View } from "react-native";
import { colors } from "../global/colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 1,
    marginHorizontal: 9,
    paddingVertical: 6,
    paddingHorizontal: 15,
    shadowColor: "#007bff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: colors.primary2,
  },
});
