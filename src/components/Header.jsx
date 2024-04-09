import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

const Header = ({ title }) => {
  const { localId, user } = useSelector((state) => state.authReducer.value);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {user ? (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={30} color="black" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary1,
    paddingTop: 25,
    paddingBottom: 10,
  },
  text: {
    color: colors.textPrimary1,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "RobotoBoldItalic",
  },
  logoutIcon: {
    position: "absolute",
    right: 20,
    top: 30,
  },
});
